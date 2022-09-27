import React from "react"
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
import { useQuery, useQueries, UseQueryResult } from "react-query"

import STAC, { IAsset, ICatalog, ICollection, IItem, IFetchData } from "@gulfofmaine/tsstac"

import { queryClient } from "queryClient"

import { useCompare, useLayer } from "./query-hooks"

/** Use React Query to manage STAC store */
export const reactQueryFetcher = async (url: string): Promise<IFetchData> => {
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

export const stac = new STAC(reactQueryFetcher)

/**
 * Fetch the root catalog
 * @returns Root catalog
 */
async function fetchRootCatalog(): Promise<ICatalog> {
  const catalog = await stac.get_root_catalog("https://data.neracoos.org/stac/catalog.json")
  return catalog
}

/**
 * Hook for root catalog
 * @returns hook for the root catalog
 */
export const useRootCatalogQuery = () => {
  return useQuery<ICatalog>("stac-catalog", fetchRootCatalog, { refetchOnWindowFocus: false })
}

async function getItem(catalog: ICatalog, id: string, depth: number = -1): Promise<IItem> {
  const item = await catalog.get_item(id, depth)
  return item
}

export function useItemQuery(id: string, enabled: boolean = true) {
  const catalogQuery = useRootCatalogQuery()
  return useQuery<IItem>(
    ["get-stac-item", { catalog: catalogQuery?.data?.id, id }],
    () => getItem(catalogQuery.data!, id),
    {
      refetchOnWindowFocus: false,
      enabled: enabled && !!catalogQuery.data,
    }
  )
}

export function useItemsQuery(ids: string[], enabled: boolean = true) {
  const catalogQuery = useRootCatalogQuery()
  return useQueries<IItem[]>(
    ids.map((id) => {
      return {
        queryKey: ["get-stac-item", { catalog: catalogQuery?.data?.id, id }],
        queryFn: () => getItem(catalogQuery.data!, id),
        refetchOnWindowFocus: false,
        enabled: enabled && !!catalogQuery.data,
      }
    })
  )
}

export const StacCatalogRoot = () => {
  const catalogQuery = useRootCatalogQuery()

  if (catalogQuery.isLoading) {
    return <div>Loading root catalog</div>
  }

  if (catalogQuery.data) {
    return (
      <div style={{ height: "60vh", overflow: "scroll" }}>
        <StacCatalogCollection cat={catalogQuery.data} />
      </div>
    )
  }

  return <div>Error loading root catalog</div>
}

export const StacCatalogCollection = ({ cat }: { cat: ICatalog | ICollection }) => {
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
        <ListGroup flush={true}>
          {childrenQuery.data.map((child) => (
            <ListGroupItem key={child.id} style={{ paddingRight: 8 }}>
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

export const StacCatalogItems = ({ cat }: { cat: ICatalog | ICollection }) => {
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
