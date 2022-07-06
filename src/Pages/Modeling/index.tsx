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
import { useQuery, UseQueryResult, useQueries } from "react-query"
import { RMap, RLayerTileWMS, RLayerTile, RLayerVector, RFeature, RStyle } from "rlayers"
import type { RView } from "rlayers/RMap"

import STAC, { IAsset, ICatalog, ICollection, IItem, IFetchData } from "@gulfofmaine/tsstac"
// import type { DataCubeItem } from "@gulfofmaine/tsstac/extensions/datacube"

import { queryClient } from "queryClient"
import { round } from "Shared/math"
import { colors } from "Shared/colors"

import { useCompare, useLayer, useQueryParam, useView, usePoint, useTable } from "./query-hooks"
import { StacCatalogRoot, useItemQuery, useItemsQuery, useRootCatalogQuery } from "./stac"
import { initialView, Layer } from "./types"

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
        <TableChart />
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

  if (catalogQuery.data && currentLayer.id && currentLayer.vars.length > 0) {
    return <LayerWMS layerId={currentLayer.id} dataVar={currentLayer.vars[0]} catalog={catalogQuery.data} />
  }

  return null
}

const LayerWMS = ({ layerId, catalog, dataVar }: { layerId: string; catalog: ICatalog; dataVar: string }) => {
  const itemQuery = useItemQuery(catalog, layerId)

  if (itemQuery.data) {
    const wms_asset: IAsset | undefined = Object.values(itemQuery.data.assets).find((asset: IAsset) =>
      asset.roles.includes("wms")
    )
    const wms_href = wms_asset?.href ? localWms(wms_asset.href) : null

    if (wms_href) {
      return (
        <RLayerTileWMS
          url={wms_href}
          key={wms_href + dataVar}
          opacity={0.7}
          params={{
            // STYLES: "boxfill/sst_36",
            // transparent: "true",
            layers: dataVar,
            STYLES: "default",
            // STYLES: "x-Occam",
            // time: "2022-07-05T00:00:00Z",
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
    ...compareLayers
      .filter((l) => l.id === currentLayer.id)
      .map((l) => ({ ...l, vars: [...currentLayer.vars, ...l.vars] })),
    ...compareLayers.filter((l) => l.id !== currentLayer.id),
  ]

  if (point && currentLayer.id && catalogQuery.data) {
    return (
      <React.Fragment>
        <ItemsLoader catalog={catalogQuery.data} layers={allLayers} point={point} />
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
  catalog,
  layers,
  point,
}: // param,
{
  catalog: ICatalog
  layers: Layer[]
  point: [number, number]
  // param: string
}) => {
  const itemsQuery = useItemsQuery(
    catalog,
    layers.map((l) => l.id!)
  )

  const loaded: [IItem, Layer] = itemsQuery
    .map((itemResult, index) => [itemResult, layers[index]] as [UseQueryResult<IItem, Error>, Layer])
    .filter(([item, layer]) => item.data !== undefined)
    .map(([item, layer]) => [item.data, layer]) as unknown as [IItem, Layer]

  const loading = itemsQuery.filter((item) => item.isLoading).length > 0
  const errors = itemsQuery.filter((item) => item.isError).length > 0

  return <ItemLayersTabs items={loaded} point={point} loading={loading} error={errors} />
}

function EdrUrl(baseUrl: string, layer: Layer, point: [number, number]) {
  debugger
  const [lon, lat] = point

  // const url = new URL(baseUrl)
  const url = new URL("http://localhost:9005/datasets/ww3/edr/position")
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

  const loaded = edrQueries.filter((query) => query.data !== undefined)
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
          Chart
          {/* {item.id}
        <ul>
          <li>EDR href: {edr_asset?.href ? localGeoApi(edr_asset!.href) : null}</li>
        </ul> */}
        </TabPane>

        <TabPane tabId="table">
          Table
          {/* {item.id}
        <ul>
          <li>EDR href: {edr_asset?.href ? localGeoApi(edr_asset!.href) : null}</li>
        </ul>
        <EDRTable edrURL={localGeoApi(edr_asset.href)} point={point} param={param} /> */}
        </TabPane>
      </TabContent>
    </div>
  )
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
