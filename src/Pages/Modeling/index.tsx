// import { read } from "covjson-reader"
import JSURL from "jsurl2"
import { fromLonLat, toLonLat } from "ol/proj"
import React from "react"
import { useSearchParams } from "react-router-dom"
import type { NavigateOptions } from "react-router-dom"
import {
  UncontrolledAccordion,
  AccordionHeader,
  AccordionBody,
  AccordionItem,
  Button,
  Col,
  Row,
  Input,
  ListGroup,
  ListGroupItem,
} from "reactstrap"
import { useQuery } from "react-query"
import { RMap, RLayerTileWMS, RLayerTile } from "rlayers"
import type { RView } from "rlayers/RMap"

import STAC, { ICatalog, ICollection, IItem, fetcher } from "@gulfofmaine/tsstac"

import { round } from "Shared/math"

interface Layer {
  id?: string
}

const initialLayer: Layer = {}

const initialView: RView = { center: [-68.5, 43.5], zoom: 6 }

const stac = new STAC(fetcher)

function useQueryParam<T>(key: string): [T | undefined, (newQuery: T, options?: NavigateOptions) => void] {
  let [searchParams, setSearchParams] = useSearchParams()
  let paramValue = searchParams.get(key)

  let value = React.useMemo(() => JSURL.parse(paramValue), [paramValue])

  let setValue = React.useCallback(
    (newValue: T, options?: NavigateOptions) => {
      let newSearchParams = new URLSearchParams(searchParams)
      newSearchParams.set(key, JSURL.stringify(newValue))
      setSearchParams(newSearchParams, options)
    },
    [key, searchParams, setSearchParams]
  )

  return [value, setValue]
}

function useView(): [RView, (RView) => void] {
  const [view, setUnroundedView] = useQueryParam<RView>("view")

  const setView = ({ center, zoom }: RView) => {
    const centerLonLat = toLonLat(center)
    setUnroundedView({ zoom: round(zoom), center: [round(centerLonLat[0], 4), round(centerLonLat[1], 4)] })
  }

  return [view ?? initialView, setView]
}

function useLayer(): [Layer, (Layer) => void] {
  const [layer, setLayer] = useQueryParam<Layer>("layer")

  return [layer ?? initialLayer, setLayer]
}

const StacCatalogRoot = () => {
  const catalogQuery = useQuery("stac-catalog", async () => {
    const catalog = await stac.get_root_catalog("http://localhost:8082/catalog.json")
    return catalog
  })

  if (catalogQuery.isLoading) {
    return <div>Loading root catalog</div>
  }

  if (catalogQuery.data) {
    return <StacCatalogCollection cat={catalogQuery.data} />
  }

  return <div>Error loading root catalog</div>
}

const StacCatalogCollection = ({ cat }: { cat: ICatalog | ICollection }) => {
  const childrenQuery = useQuery(["stac-children", cat.id], async () => {
    const children = await cat.get_children()
    return children
  })

  if (childrenQuery.isLoading) {
    return <div>Loading children for {cat.id}</div>
  }

  if (childrenQuery.data) {
    // if (0 < childrenQuery.data.length) {
    return (
      <React.Fragment>
        {cat.title}
        <ListGroup>
          {childrenQuery.data.map((child) => (
            <ListGroupItem key={child.id}>
              <StacCatalogCollection cat={child} key={child.id} />
            </ListGroupItem>
          ))}
        </ListGroup>
        <StacCatalogItems cat={cat} />
      </React.Fragment>
    )
    // }
    // return
  }

  return <div>Error loading children for {cat.id}</div>
}

const StacCatalogItems = ({ cat }: { cat: ICatalog | ICollection }) => {
  const itemsQuery = useQuery(["stac-items", cat.id], async () => {
    const items = await cat.get_items()
    return items
  })

  if (itemsQuery.isLoading) {
    return <li>Loading items for {cat.id}</li>
  }

  if (itemsQuery.data) {
    return (
      <UncontrolledAccordion stayOpen={true} defaultOpen={[]} open={"0"} flush={true}>
        {itemsQuery.data.map((item) => (
          <StacItem item={item} key={item.id} />
        ))}
      </UncontrolledAccordion>
    )
  }

  return <li>Error loading items for {cat.id}</li>
}

const StacItem = ({ item }: { item: IItem }) => {
  const [currentLayer, setLayer] = useLayer()

  return (
    <AccordionItem>
      <AccordionHeader targetId={item.id}>
        <Button
          size="sm"
          color="primary"
          outline={true}
          active={currentLayer.id === item.id}
          onClick={React.useCallback(() => {
            setLayer({ id: item.id })
          }, [item.id])}
        >
          {item.id}
        </Button>
      </AccordionHeader>
      <AccordionBody accordionId={item.id}>
        <ul>
          {Object.entries(item.assets).map(([key, asset]) => (
            <li key={key}>
              <a href={asset.href}>{asset.description ?? asset.href}</a>
            </li>
          ))}
        </ul>
      </AccordionBody>
    </AccordionItem>
  )
}

export const ModelingPage: React.FC = () => {
  const [point, setPoint] = useQueryParam<[number, number]>("point")
  const [{ center, zoom }, setView] = useView()

  return (
    <React.Fragment>
      <Row>
        <Col md={3}>
          <StacCatalogRoot />
        </Col>
        <Col md={9}>
          <RMap
            width={"100%"}
            height={"60vh"}
            className="model-map"
            initial={{ center: fromLonLat(initialView.center), zoom: initialView.zoom }}
            view={[{ center: fromLonLat(center), zoom }, setView]}
            onClick={(event) => {
              const coords = toLonLat(event.map.getCoordinateFromPixel(event.pixel))

              setPoint([round(coords[0]), round(coords[1])])
            }}
          >
            <RLayerTile url="http://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}" />
            <RLayerTile url="http://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}" />

            {/* <RLayerTileWMS
              url="http://localhost:8081/thredds/wms/datasets/BIO/WW3_72/gulf_of_maine/latest.nc"
              opacity={0.7}
              params={{
                // STYLES: "boxfill/sst_36",
                // transparent: "true",
                layers: "hs",
                STYLES: "default",
                // STYLES: "x-Occam",
                time: "2021-08-30T00:00:00Z",
                COLORSCALERANGE: "0,5",
              }}
            /> */}
          </RMap>
        </Col>
      </Row>
      <Row>{/* <Col>{point ? <TableChart lat={point[1]} lon={point[0]} /> : null}</Col> */}</Row>
    </React.Fragment>
  )
}

const TableChart = ({ lat, lon }: { lat: number; lon: number }) => {
  const pointUrl = `http://localhost:5000/collections/ww3/position?f=json&coords=POINT(${lon} ${lat})&parameter-name=hs`

  //   const result = useQuery("point", () => fetch(pointUrl).then((res) => res.json()))
  const result = useQuery(
    ["point", { lat, lon }],
    async () => {
      const res = await fetch(pointUrl)
      const jsondoc = await res.json()
      // const covjson = await read(jsondoc)
      return jsondoc
    },
    {
      /** Refresh every 5 minutes */
      staleTime: 5 * 60 * 1000,
      /** Cache for a maximum of 15 minutes */
      cacheTime: 15 * 60 * 1000,
      /** Refresh even when the window isn't the focus */
      refetchIntervalInBackground: true,
    }
  )

  if (result.isError) {
    return <div>Error loading data from EDR</div>
  }

  if (result.isLoading) {
    return <div>Loading data from EDR</div>
  }

  console.log(result.data)

  const { time } = result.data.domain.axes
  const start = new Date(time.start)
  const stop = new Date(time.stop)
  const { hs } = result.data.ranges

  const timeStep = (stop.valueOf() - start.valueOf()) / time.num

  const values = hs.values.map((value, index) => {
    const time = new Date(start.valueOf() + index * timeStep)
    return [value, time]
  })

  return (
    <div>
      <h4>
        Time series for {result.data.parameters.hs.description} @ {lat}, {lon}
      </h4>
      <li>
        {values.map((value, index) => (
          <li key={index}>
            {round(value[0])} {result.data.parameters.hs.unit.symbol} at {value[1].toISOString()}
          </li>
        ))}
      </li>
    </div>
  )
}
