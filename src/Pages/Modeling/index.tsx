import JSURL from "jsurl2"
import { Point } from "ol/geom"
import { fromLonLat, toLonLat } from "ol/proj"
import React from "react"
import { useSearchParams } from "react-router-dom"
import type { NavigateOptions } from "react-router-dom"
import Select from "react-select"
import {
  UncontrolledAccordion,
  AccordionHeader,
  AccordionBody,
  AccordionItem,
  Button,
  ButtonGroup,
  Col,
  Row,
  Input,
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Table,
} from "reactstrap"
import { useQuery, UseQueryResult, useQueries } from "react-query"
import { RMap, RLayerTileWMS, RLayerTile, RLayerVector, RFeature, RStyle, RControl } from "rlayers"
import type { RView } from "rlayers/RMap"

import STAC, { IAsset, ICatalog, ICollection, IItem, IFetchData } from "@gulfofmaine/tsstac"
// import type { DataCubeItem } from "@gulfofmaine/tsstac/extensions/datacube"

import { queryClient } from "queryClient"
import { round } from "Shared/math"
import { colors } from "Shared/colors"

import { ModelChart } from "./chart"
import {
  useCompare,
  useLayer,
  useQueryParam,
  useView,
  usePoint,
  useTable,
  useTime,
  useCurrentItem,
} from "./query-hooks"
import { StacCatalogRoot, useItemQuery, useItemsQuery, useRootCatalogQuery } from "./stac"
import { initialView, Layer, LoadedData } from "./types"

export const ModelingPage: React.FC = () => {
  const [point, setPoint] = usePoint()
  const [{ center, zoom }, setView] = useView()

  return (
    <React.Fragment>
      <Row>
        <Col md={3} style={{ padding: 0 }}>
          <StacCatalogRoot />
        </Col>

        <Col md={9} style={{ paddingLeft: 0 }}>
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

            <SelectedLayerWMS />

            {point ? <SelectedPoint point={point} setPoint={setPoint} /> : null}
          </RMap>
        </Col>
      </Row>

      <Row>
        <TimeControl />
        <TableChart />
      </Row>
    </React.Fragment>
  )
}

const TimeControl = () => {
  const [layer, item] = useCurrentItem()
  const [time, setTime] = useTime()

  if (layer && item) {
    const times: string[] = item.properties["cube:dimensions"].time.values ?? []
    const options = times.map((t) => ({ value: t, label: t }))

    const defaultValue = options.find((o) => o.value === time) ?? options[0]

    return (
      <Select
        options={options}
        defaultValue={defaultValue}
        onChange={(event) => {
          if (event?.value) {
            setTime(event.value)
          }
        }}
      />
    )
  }

  return null
}

const SelectedPoint = ({
  point,
  setPoint,
}: {
  point: [number, number]
  setPoint: ([x, y]: [number, number]) => void
}) => {
  return (
    <RLayerVector>
      <RFeature
        geometry={new Point(fromLonLat(point))}
        // Enable dragging of point, though the map springs back despite prevent defaults
        // onPointerDrag={React.useCallback((e) => {
        //   const coords = e.map.getCoordinateFromPixel(e.pixel)
        //   e.target.setGeometry(new Point(coords))
        //   e.preventDefault()
        //   return false
        // }, [])}
        // onPointerDragEnd={React.useCallback((e) => {
        //   const coords = toLonLat(e.map.getCoordinateFromPixel(e.pixel))
        //   e.preventDefault()
        //   setPoint([round(coords[0]), round(coords[1])])
        // }, [])}
        // onPointerEnter={React.useCallback((e) => (e.map.getTargetElement().style.cursor = "move") && undefined, [])}
        // onPointerLeave={React.useCallback((e) => (e.map.getTargetElement().style.cursor = "initial") && undefined, [])}
      >
        <RStyle.RStyle>
          <RStyle.RCircle radius={10}>
            <RStyle.RFill color={colors.whatOrange} />
            <RStyle.RStroke color="grey" width={1.5} />
          </RStyle.RCircle>
        </RStyle.RStyle>
      </RFeature>
    </RLayerVector>
  )
}

const SelectedLayerWMS = () => {
  const [currentLayer, setLayer] = useLayer()

  if (currentLayer.id && currentLayer.vars.length > 0) {
    return <LayerWMS layerId={currentLayer.id} dataVar={currentLayer.vars[0]} />
  }

  return null
}

const LayerWMS = ({ layerId, dataVar }: { layerId: string; dataVar: string }) => {
  const itemQuery = useItemQuery(layerId)
  const [time, setTime] = useTime()

  if (itemQuery.data) {
    const wms_asset: IAsset | undefined = Object.values(itemQuery.data.assets).find((asset: IAsset) =>
      asset.roles.includes("wms")
    )
    const wms_href = wms_asset?.href

    if (wms_href) {
      return (
        <RLayerTileWMS
          url={wms_href}
          key={wms_href + dataVar + time}
          opacity={0.7}
          params={{
            // STYLES: "boxfill/sst_36",
            // transparent: "true",
            layers: dataVar,
            STYLES: "default",
            // STYLES: "x-Occam",
            time,
            COLORSCALERANGE: "0,5",
          }}
        />
      )
    }
  }

  return null
}

const TableChart = () => {
  const [point, setPoint] = usePoint()
  const [currentLayer, setLayer] = useLayer()
  const catalogQuery = useRootCatalogQuery()
  const [compareLayers, setCompare] = useCompare()

  const allLayers = [
    {
      ...currentLayer,
      vars: [
        ...currentLayer.vars,
        ...compareLayers
          .filter((l) => l.id === currentLayer.id)
          .map((l) => l.vars)
          .flat(),
      ],
    },
    ...compareLayers.filter((l) => l.id !== currentLayer.id),
  ]

  if (point && currentLayer.id && catalogQuery.data) {
    return (
      <React.Fragment>
        <ItemsLoader layers={allLayers} point={point} />
        {/* <ItemLoader catalog={catalogQuery.data} layerId={currentLayer.id} point={point} param={currentLayer.vars[0]} /> */}
      </React.Fragment>
    )
  } else if (catalogQuery.isLoading) {
    return <div>Loading catalog</div>
  } else if (point) {
    return <div>Layer needs to be selected to display info for point</div>
  } else if (currentLayer.id) {
    return <div>Point needs to be selected to display info for current layer</div>
  }

  return <div>Neither point or layer selected</div>
}

function localWms(url: string) {
  return url.replace("https://data.neracoos.org/thredds/", "http://localhost:8081/thredds/")
}

function localGeoApi(url: string) {
  // debugger
  // return url.replace("https://data.neracoos.org/geoapi/", "http://localhost:5002/geoapi/")
  // debugger
  // return url.replace("", "http://localhost:9005/datasets/ww3/edr/position")
  return "http://localhost:9005/datasets/ww3/edr/position"
}

const ItemsLoader = ({
  layers,
  point,
}: // param,
{
  layers: Layer[]
  point: [number, number]
  // param: string
}) => {
  const itemsQuery = useItemsQuery(layers.map((l) => l.id!))

  const loaded: [IItem, Layer] = itemsQuery
    .map((itemResult, index) => [itemResult, layers[index]] as [UseQueryResult<IItem, Error>, Layer])
    .filter(([item, layer]) => item.data !== undefined)
    .map(([item, layer]) => [item.data, layer]) as unknown as [IItem, Layer]

  const loading = itemsQuery.filter((item) => item.isLoading).length > 0
  const errors = itemsQuery.filter((item) => item.isError).length > 0

  return <ItemLayersTabs items={loaded} point={point} loading={loading} error={errors} />
}

function EdrUrl(baseUrl: string, layer: Layer, point: [number, number]) {
  const [lon, lat] = point

  const url = new URL(baseUrl)
  url.searchParams.set("parameter-name", layer.vars.join(","))
  url.searchParams.set("coords", `POINT(${lon} ${lat})`)
  return url.toString()
}

function EdrForItem(item: IItem): IAsset | undefined {
  return Object.values(item.assets).find((asset: IAsset) => asset.roles.includes("edr"))
}

const ItemLayersTabs = ({
  items,
  point,
  loading,
  error,
}: {
  items: [IItem, Layer]
  point: [number, number]
  loading: boolean
  error: boolean
}) => {
  const [table, setTable] = useTable()

  const edrSources: { url?: string; item: IItem; layer: Layer }[] = items.map((itemLayer) => {
    const baseUrl = EdrForItem(itemLayer[0])?.href
    if (baseUrl) {
      const url = EdrUrl(baseUrl, itemLayer[1], point)
      return { url, item: itemLayer[0], layer: itemLayer[1] }
    }
    return { url: undefined, item: itemLayer[0], layer: itemLayer[1] }
  })

  const edrQueries = useQueries(
    edrSources.map((edrSource) => ({
      queryKey: ["edr-position", edrSource.url],
      queryFn: async () => {
        const raw = await fetch(edrSource.url!)
        const response = await raw.json()
        return {
          response,
          ...edrSource,
        }
      },
      enabled: edrSource.url !== undefined,
      refetchOnWindowFocus: false,
    }))
  )

  const loaded = edrQueries
    // .filter((query): query is { data: LoadedData } => query.data !== undefined)
    .map((query) => query.data)
    .filter((data): data is LoadedData => !!data)
  const edrLoading = edrQueries.filter((query) => query.isLoading).length > 0
  const edrError = edrQueries.filter((query) => query.error).length > 0

  return (
    <div>
      <Nav tabs={true}>
        <NavItem>
          <NavLink
            className={!table ? "active" : undefined}
            onClick={() => {
              setTable(false)
            }}
          >
            Chart
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={table ? "active" : undefined}
            onClick={() => {
              setTable(true)
            }}
          >
            Table
          </NavLink>
        </NavItem>
        {loading || edrLoading ? <NavItem>Loading</NavItem> : null}
        {error || edrError ? <NavItem>Error</NavItem> : null}
      </Nav>
      <TabContent activeTab={table ? "table" : "chart"}>
        <TabPane tabId="chart">
          {loaded.length > 0 ? <ModelChart loaded={loaded} /> : "No data is loaded to display"}
        </TabPane>

        <TabPane tabId="table">
          {/* <EdrTable loaded={loaded} /> */}
          Table
        </TabPane>
      </TabContent>
    </div>
  )
}

const EdrTable = ({ loaded }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Time</th>
          {loaded.map((l) => {
            const id = l.data.layer.id
            const parameters = Object.keys(l.data.response.parameters)
            return (
              <th key={id} colSpan={parameters.length}>
                {id}
              </th>
            )
          })}
        </tr>
        <tr>
          <th />
          {loaded.map((l) => {
            const id = l.data.layer.id
            const parameters = Object.keys(l.data.response.parameters)

            return (
              <React.Fragment>
                {parameters.map((p) => (
                  <th key={id + p}>{p}</th>
                ))}
              </React.Fragment>
            )
          })}
        </tr>
      </thead>
    </Table>
  )
}
