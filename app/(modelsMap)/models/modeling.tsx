import { UseQueryResult, useQueries } from "@tanstack/react-query"
import React, { useEffect, useState } from "react"
import Select from "react-select"
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap"
import { StacCatalogRoot } from "./stac-catalog"
import { StacMap } from "./stac-map"

import { IAsset, IItem } from "@gulfofmaine/tsstac"
// import type { DataCubeItem } from "@gulfofmaine/tsstac/extensions/datacube"

import { ModelChart } from "./chart"
import { useCompare, useCurrentItem, useLayer, usePoint, useTable, useTime } from "./query-hooks"
import { useLatestItemsByCollectionIdsQuery, useRootCatalogQuery } from "./stac-queries"
import { EdrTable } from "./table"
import { Layer, LoadedData } from "./types"


export const ModelingPage = () => {
  const [loading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      <Row>
        <Col md={3} style={{ padding: 0 }}>
          <StacCatalogRoot />
        </Col>
       <Col md={9} style={{ paddingLeft: 0 }}>
            {!loading && <StacMap />}
        </Col>
        </Row>
        <Row>
          <TimeControl />
          <TableChart />
        </Row>
      </>
  )
}

export const TimeControl = () => {
  const [layer, item] = useCurrentItem()
  const [time, setTime] = useTime()

  if (layer && item) {
    const times: string[] = item.properties["cube:dimensions"].time.values ?? []
    const options = times.map((t) => ({ value: t, label: t }))

    let foundValue = options.find((o) => o.value === time)

    // If the time isn't found in the current layer,
    // set the first layer time
    if (typeof foundValue === "undefined") {
      foundValue = options[0]
      setTime(foundValue.value)
    }

    return (
      <Select
        options={options}
        defaultValue={foundValue}
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

export const TableChart = () => {
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
  const itemsQuery = useLatestItemsByCollectionIdsQuery(layers.map((l) => l.id!))

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

  const edrQueries = useQueries({
    queries: edrSources.map((edrSource) => ({
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
    })),
  })

  const loaded = edrQueries
    // .filter((query): query is { data: LoadedData } => query.data !== undefined)
    .map((query) => query.data)
    .filter((data): data is LoadedData => !!data)
  const edrLoading = edrQueries.filter((query) => query.isLoading).length > 0
  const edrError = edrQueries.filter((query) => query.error).length > 0

  const now = new Date()
  const hourInMlSeconds = 60 * 60 * 1000
  const hourAgo = new Date(now.valueOf() - hourInMlSeconds)

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
          <EdrTable loaded={loaded} after={hourAgo} />
          {/* Table */}
        </TabPane>
      </TabContent>
    </div>
  )
}
