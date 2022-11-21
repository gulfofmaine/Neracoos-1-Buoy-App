import React from "react"
import Select from "react-select"
import { Col, Row, Nav, NavItem, NavLink, TabContent, TabPane, Table } from "reactstrap"
import { UseQueryResult, useQueries } from "react-query"

import { IAsset, IItem } from "@gulfofmaine/tsstac"
// import type { DataCubeItem } from "@gulfofmaine/tsstac/extensions/datacube"

import { ModelChart } from "./chart"
import { useCompare, useLayer, usePoint, useTable, useTime, useCurrentItem } from "./query-hooks"
import { StacCatalogRoot } from "./stac-catalog"
import { StacMap } from "./stac-map"
import { useItemsByIdsQuery, useRootCatalogQuery } from "./stac-queries"
import { Layer, LoadedData } from "./types"

export const ModelingPage: React.FC = () => {
  return (
    <React.Fragment>
      <Row>
        <Col md={3} style={{ padding: 0 }}>
          <StacCatalogRoot />
        </Col>

        <Col md={9} style={{ paddingLeft: 0 }}>
          <StacMap />
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
  const itemsQuery = useItemsByIdsQuery(layers.map((l) => l.id!))

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
