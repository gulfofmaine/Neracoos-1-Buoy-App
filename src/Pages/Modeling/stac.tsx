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

import STAC, { IAsset, ICatalog, ICollection, IItem, IFetchData, ISTAC } from "@gulfofmaine/tsstac"

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

async function getChild(
  url: string,
  parent?: ICatalog | ICollection,
  root_catalog?: ICatalog
): Promise<ICatalog | ICollection> {
  // const response = await fetch(url)
  // const json = await response.json()

  // return json as ICatalog | ICollection
  return (await stac.get(url, { parent, root: root_catalog })) as ICatalog | ICollection
}

async function getItemByUrl(url: string, parent?: ICatalog | ICollection, root_catalog?: ICatalog): Promise<IItem> {
  return (await stac.get(url, { parent, root: root_catalog })) as IItem
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
    return <div>Loading model catalog</div>
  }

  if (catalogQuery.data) {
    return (
      <div style={{ height: "60vh", overflow: "scroll" }}>
        {/* <StacCatalogCollection cat={catalogQuery.data} /> */}
        {/* Loaded root catalog */}
        {/* <StacTraverse catalog={catalogQuery.data} /> */}
        {/* Loaded catalog */}
        <STACTraverseBase catalog={catalogQuery.data} />
      </div>
    )
  }

  return <div>Error loading root catalog</div>
}

const STACTraverseBase = ({ catalog }: { catalog: ICatalog }) => {
  const root_children_urls = catalog
    .get_child_links()
    .map((link) => ({ parent: catalog, url: catalog.url_for_link(link) }))

  // return <React.Fragment>Loaded root catalog</React.Fragment>
  return <STACCollectionsLoader catalog={catalog} initial_children_urls={new Set(root_children_urls)} />
}

interface StacURL {
  parent: ICatalog | ICollection
  url: string
}

const STACCollectionsLoader = ({
  catalog,
  initial_children_urls,
}: {
  catalog: ICatalog
  initial_children_urls: Set<StacURL>
}) => {
  const [childrenUrls, setChildrenUrls] = React.useState<Set<StacURL>>(initial_children_urls)

  const addChildrenUrls = (urls: StacURL[]) => setChildrenUrls((prev) => new Set([...prev, ...urls]))

  const childrenQueries = useQueries(
    Array.from(childrenUrls).map(({ url, parent }) => ({
      queryKey: ["get-stac-child", { url }],
      queryFn: () => getChild(url as string, parent, catalog),
      refetchOnWindowFocus: false,
    }))
  )

  childrenQueries.forEach((query) => {
    if (query.data) {
      const children = query.data.get_child_links().map((link) => query.data.url_for_link(link))
      const new_children = children
        .map((child) => ({ parent: query.data, url: child }))
        .filter((child) => !childrenUrls.has(child))

      // Need to add new_children to state if need be
      if (0 < new_children.length) {
        addChildrenUrls(new_children)
      }
    }
  })

  const itemsUrls = childrenQueries
    .filter((query) => query.data)
    .map((query) => query.data)
    .map((collection) =>
      collection!.get_item_links().map((link) => ({ url: collection!.url_for_link(link), parent: collection! }))
    )
    .flat()

  if (0 < itemsUrls.length) {
    return <STACItemsLoader catalog={catalog} itemUrls={itemsUrls} />
  }

  return (
    <ul>
      <li>Loaded root catalog</li>
      <li>Loading {Array.from(childrenUrls).length} sub-catalogs/collections</li>
      <li>Loading {itemsUrls.length} items</li>
    </ul>
  )
}

const STACItemsLoader = ({ catalog, itemUrls }: { catalog: ICatalog; itemUrls: StacURL[] }) => {
  const itemsQuery = useQueries(
    Array.from(itemUrls).map(({ url, parent }) => ({
      queryKey: ["get-stac-item", { url }],
      queryFn: () => getItemByUrl(url as string, parent, catalog),
      refetchOnWindowFocus: false,
    }))
  )

  // First filter by which items are loaded
  const loadedItems = itemsQuery.filter((query) => query.isSuccess).map((query) => query.data)

  // Then group by collection
  const itemsByCollection = loadedItems.reduce((result, item) => {
    if (item && item.collection) {
      const collection = item.collection
      if (!result[collection]) {
        result[collection] = []
      }

      result[collection].push(item)
    }
    return result
  }, {})

  // Find the item for each collection with the latest forecast_reference_time
  // let latestItems = {}
  // Object.keys(itemsByCollection).forEach((key) => {
  //   const items = itemsByCollection[key]

  //   const item = items.reduce((a, b) => {
  //     const a_date = new Date(a.properties["cube:dimensions"].forecast_reference_time.values[0])
  //     const b_date = new Date(b.properties["cube:dimensions"].forecast_reference_time.values[0])

  //     if (a_date.valueOf() < b_date.valueOf()) {
  //       return b
  //     }
  //     return a
  //   })
  //   latestItems[key] = item
  // })

  const latestItems = Object.keys(itemsByCollection).map((key) => {
    const items = itemsByCollection[key]

    const item = items.reduce((a, b) => {
      const a_date = new Date(a.properties["cube:dimensions"].forecast_reference_time.values[0])
      const b_date = new Date(b.properties["cube:dimensions"].forecast_reference_time.values[0])

      if (a_date.valueOf() < b_date.valueOf()) {
        return b
      }
      return a
    })
    return item
  })

  // Regroup by {ioos_category: {standard_name: Items[]}}
  let ioosCategoryItems = {}
  latestItems.forEach((item) => {
    Object.keys(item.properties["cube:variables"]).forEach((itemVar) => {
      const attrs = item.properties["cube:variables"][itemVar]["gmri-cube:attrs"]

      if (attrs.hasOwnProperty("ioos_category") && attrs.hasOwnProperty("standard_name")) {
        const ioos_category = attrs.ioos_category
        const standard_name = attrs.standard_name

        if (!ioosCategoryItems[ioos_category]) {
          ioosCategoryItems[ioos_category] = {}
        }

        if (!ioosCategoryItems[ioos_category][standard_name]) {
          ioosCategoryItems[ioos_category][standard_name] = []
        }

        ioosCategoryItems[ioos_category][standard_name].push(item)
      }
    })
  })

  return <React.Fragment>Loading items</React.Fragment>
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
      <UncontrolledAccordion stayOpen={true} defaultOpen={[]} flush={true}>
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
