import JSURL from "jsurl2"
import { Point } from "ol/geom"
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
import { useQuery } from "react-query"
import { RMap, RLayerTileWMS, RLayerTile, RLayerVector, RFeature, RStyle } from "rlayers"
import type { RView } from "rlayers/RMap"

import STAC, { IAsset, ICatalog, ICollection, IItem, IFetchData } from "@gulfofmaine/tsstac"
// import type { DataCubeItem } from "@gulfofmaine/tsstac/extensions/datacube"

import { queryClient } from "queryClient"
import { round } from "Shared/math"
import { colors } from "Shared/colors"

interface Layer {
  id?: string
  vars: string[]
}

const initialLayer: Layer = { vars: [] }

const initialView: RView = { center: [-68.5, 43.5], zoom: 6 }

/** Use React Query to manage STAC store */
const reactQueryFetcher = async (url: string): Promise<IFetchData> => {
  const data = await queryClient.fetchQuery(["stac-fetch", url], async () => {
    const result = await fetch(url)
    if (!result.ok) {
      throw new Error("Network response was not ok")
    }
    const json = await result.json()
    return json
  })
  return data
}
const stac = new STAC(reactQueryFetcher)

/**
 * Create a hook to keep query params in sync with state
 * @param key name of object to synce
 * @returns synced object and setter for synced object
 */
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

/**
 * Sync the current map view with the state
 * @returns view and view setter
 */
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

function useCompare(): [Layer[], (Layer) => void] {
  const [currentLayer, setLayer] = useLayer()
  const [layers, setCompare] = useQueryParam<Layer[]>("compare")

  React.useEffect(() => {
    const compareLayers = [
      ...(layers ?? []).filter((l) => l.id !== currentLayer.id),
      ...(layers ?? [])
        .filter((l) => l.id === currentLayer.id)
        .map((l) => ({ ...l, vars: l.vars?.filter((v) => v !== (currentLayer.vars ?? [])[0] ?? true) })),
    ]

    setCompare(compareLayers)
  }, [currentLayer, layers, setCompare])

  const toggleCompare = (layer: Layer) => {
    const compareLayers = (layers ?? []).filter((l) => l.id !== layer.id)

    const selectedLayer = (layers ?? []).find((l) => l.id === layer.id)

    if (selectedLayer) {
      const vars = (selectedLayer.vars ?? []).filter((v) => v !== (layer.vars ?? [])[0])

      if (vars.length > 0 && vars.length === selectedLayer.vars.length) {
        vars.push(layer.vars[0])

        compareLayers.push({ ...layer, vars })
      }
    } else {
      compareLayers.push(layer)
    }

    setCompare(compareLayers)
  }

  return [layers ?? [], toggleCompare]
}

/**
 * Fetch the root catalog
 * @returns Root catalog
 */
async function fetchRootCatalog(): Promise<ICatalog> {
  const catalog = await stac.get_root_catalog("http://localhost:8082/catalog.json")
  return catalog
}

/**
 * Hook for root catalog
 * @returns hook for the root catalog
 */
const useRootCatalogQuery = () => {
  return useQuery<ICatalog>("stac-catalog", fetchRootCatalog)
}

async function getItem(catalog: ICatalog, id: string, depth: number = -1): Promise<IItem> {
  const item = await catalog.get_item(id, depth)
  return item
}

function useItemQuery(catalog: ICatalog, id: string) {
  return useQuery<IItem>(["get-stac-item", { catalog: catalog.id, id }], () => getItem(catalog, id))
}

const StacCatalogRoot = () => {
  const catalogQuery = useRootCatalogQuery()

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

// interface DataCubeItem extends IItem {}

interface ForecastItem extends IItem {
  properties: {
    ["cube:dimensions"]: {
      forecast_reference_time: {
        values: string[]
      }
    }
    ["cube:variables"]: {
      [key: string]: {
        type: string
        dimensions: string[]
        extent: [number, number]
        description?: string
        unit?: string
      }
    }
  }
}

const StacItem = ({ item }: { item: IItem }) => {
  const [currentLayer, setLayer] = useLayer()
  const [compareLayers, toggleCompareLayer] = useCompare()

  const variables = (item as unknown as ForecastItem).properties["cube:variables"]

  // debugger

  let title: string = item.id

  if ((item as unknown as ForecastItem).properties["cube:dimensions"].forecast_reference_time?.values[0]) {
    const forecastDate = (item as ForecastItem).properties["cube:dimensions"].forecast_reference_time.values[0]

    title = `Forecasted at ${forecastDate}`
  }

  return (
    <AccordionItem>
      <AccordionHeader targetId={item.id}>{title}</AccordionHeader>
      <AccordionBody accordionId={item.id}>
        <Table size="sm">
          <tbody>
            {Object.entries(variables).map(([key, values]) => (
              <tr key={key}>
                <td>{values.description ?? key}</td>
                <td>
                  <Button
                    size="sm"
                    color="primary"
                    outline={true}
                    active={currentLayer.id === item.id && (currentLayer.vars?.includes(key) ?? false)}
                    onClick={() => {
                      setLayer({ id: item.id, vars: [key] })
                    }}
                    style={{ textAlign: "left" }}
                  >
                    Map
                  </Button>
                </td>
                <td>
                  <Button
                    size="sm"
                    color="primary"
                    outline={true}
                    active={compareLayers.find((l) => l.id === item.id && l.vars.includes(key)) ? true : false}
                    onClick={() => {
                      toggleCompareLayer({ id: item.id, vars: [key] })
                    }}
                  >
                    Compare
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </AccordionBody>
    </AccordionItem>
  )
}

export const ModelingPage: React.FC = () => {
  const [point, setPoint] = usePoint()
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

            <SelectedLayerWMS />

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

            {point ? <SelectedPoint point={point} setPoint={setPoint} /> : null}
          </RMap>
        </Col>
      </Row>
      <Row>
        <SelectedLayerTableChart />
        {/* <Col>{point ? <TableChart lat={point[1]} lon={point[0]} /> : null}</Col> */}
      </Row>
    </React.Fragment>
  )
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
  const catalogQuery = useRootCatalogQuery()
  const [currentLayer, setLayer] = useLayer()

  if (catalogQuery.data && currentLayer.id) {
    return <LayerWMS layerId={currentLayer.id} catalog={catalogQuery.data} />
  }

  return null
}

const LayerWMS = ({ layerId, catalog }: { layerId: string; catalog: ICatalog }) => {
  const itemQuery = useItemQuery(catalog, layerId)

  if (itemQuery.data) {
    const wms_asset: IAsset | undefined = Object.values(itemQuery.data.assets).find((asset: IAsset) =>
      asset.roles.includes("wms")
    )
    const wms_href = wms_asset?.href ? localWms(wms_asset.href) : null

    if (wms_href) {
      return null
      // return (
      //   <RLayerTileWMS
      //     url={}
      //     opacity={0.7}
      //     params={{
      //       // STYLES: "boxfill/sst_36",
      //       // transparent: "true",
      //       layers: "hs",
      //       STYLES: "default",
      //       // STYLES: "x-Occam",
      //       time: "2021-08-30T00:00:00Z",
      //       COLORSCALERANGE: "0,5",
      //     }}
      //   />
      // )
    }
  }

  return null
}

const SelectedLayerTableChart = () => {
  const [point, setPoint] = usePoint()
  const [currentLayer, setLayer] = useLayer()
  const catalogQuery = useRootCatalogQuery()

  // const itemQuery = useQuery(
  //   ["stac-get-item", currentLayer.id],
  //   // async () => {
  //   //   const item = await catalogQuery.data.get_item(currentLayer.id, -1)
  //   //   return item
  //   // },
  //   async ({ queryKey }) => {
  //     const item = await catalogQuery.data.get_item(queryKey[1], -1)
  //     return item
  //   },
  //   { enabled: !!currentLayer.id && !!catalogQuery.data?.id }
  // )

  if (point && currentLayer.id && catalogQuery.data) {
    return (
      <ItemLoader catalog={catalogQuery.data} layerId={currentLayer.id} point={point} param={currentLayer.vars[0]} />
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

const ItemLoader = ({
  catalog,
  layerId,
  point,
  param,
}: {
  catalog: ICatalog
  layerId: string
  point: [number, number]
  param: string
}) => {
  const itemQuery = useItemQuery(catalog, layerId)
  const [table, setTable] = useTable()

  if (itemQuery.data) {
    const item: IItem = itemQuery.data

    const edr_asset = Object.values(item.assets).find((asset) => asset.roles.includes("edr"))
    // const wms_asset = Object.values(item.assets).find((asset) => asset.roles.includes("wms"))

    if (edr_asset) {
      return TableChartTabs(item, edr_asset, table, setTable, point, param)
    }
    return <div>EDR API not available for data source</div>
  }

  if (itemQuery.isLoading) {
    return <div>Loading {layerId} info</div>
  }

  const [lon, lat] = point

  return (
    <div>
      Point selected {lat}, {lon} for layer {layerId}
    </div>
  )
}

const EDRTable = ({ point, edrURL, param }: { point: [number, number]; edrURL: string; param: string }) => {
  const [lon, lat] = point

  const pointUrl = `${edrURL}?coords=POINT(${lon} ${lat})&parameter-name=${param}`

  const result = useQuery(
    ["point", { edrURL, lat, lon, param }],
    async () => {
      const res = await fetch(pointUrl)
      const json = await res.json()
      return json
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
    return <div>Loading data via EDR</div>
  }

  if (result.data) {
    const params = Object.keys(result.data.parameters)
    return (
      <Table responsive={true} size="sm" striped={true}>
        <thead>
          <tr>
            <th>Time</th>
            {params.map((p) => (
              <th key={p}>
                {result.data.parameters[p].observedProperty.label.en} - {p}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {result.data.domain.axes.t.values.map((v, i) => (
            <tr key={i}>
              <td>{v}</td>
              {params.map((p) => (
                <td key={p}>{result.data.ranges[p].values[i]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }

  return null
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
const TableChartTabs = (
  item: IItem,
  edr_asset: IAsset,
  table: boolean | undefined,
  setTable: (newQuery: boolean, options?: any) => void,
  point: [number, number],
  param: string
) => {
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
      </Nav>
      <TabContent activeTab={table ? "table" : "chart"}>
        <TabPane tabId="chart">
          Chart
          {item.id}
          <ul>
            <li>EDR href: {edr_asset?.href ? localGeoApi(edr_asset!.href) : null}</li>
            {/* <li>WMS href: {wms_asset?.href ? localWms(wms_asset!.href) : null}</li> */}
          </ul>
        </TabPane>

        <TabPane tabId="table">
          Table
          {item.id}
          <ul>
            <li>EDR href: {edr_asset?.href ? localGeoApi(edr_asset!.href) : null}</li>
            {/* <li>WMS href: {wms_asset?.href ? localWms(wms_asset!.href) : null}</li> */}
          </ul>
          <EDRTable edrURL={localGeoApi(edr_asset.href)} point={point} param={param} />
        </TabPane>
      </TabContent>
    </div>
  )
}

function usePoint(): [[number, number] | undefined, ([x, y]: [number, number]) => void] {
  return useQueryParam<[number, number]>("point")
}

/**
 * Hooks to show table in place of chart or not
 */
function useTable() {
  return useQueryParam<boolean>("table")
}
