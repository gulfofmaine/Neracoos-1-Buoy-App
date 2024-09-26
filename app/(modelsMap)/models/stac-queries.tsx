import { useQuery, useQueries, useQueryClient } from "@tanstack/react-query"
import * as React from "react"

import STAC, { ICatalog, ICollection, IItem, IFetchData } from "@gulfofmaine/tsstac"

export const STACContext = React.createContext<STAC | undefined>(undefined)

/**
 * Provide access to the current STAC Catalog for any component lower in the tree
 */
export function STACProvider({ children }: { children: React.ReactNode }) {
  const queryClient = useQueryClient()

  const reactQueryFetcher = async (url: string): Promise<IFetchData> => {
    const data = await queryClient.fetchQuery({
      queryKey: ["stac-fetch", url],
      queryFn: async () => {
        const result = await fetch(url)
        if (!result.ok) {
          throw new Error("Network response was not ok")
        }
        const json = await result.json()
        return json
      },
    })
    return data
  }

  const stac = new STAC(reactQueryFetcher)

  return <STACContext.Provider value={stac}>{children}</STACContext.Provider>
}

/**
 * Access the current STAC catalog
 *
 * @returns the current STAC
 */
export function useSTAC() {
  const stac = React.useContext(STACContext)

  if (!stac) {
    throw new Error("useSTAC must be used inside the STACProvider")
  }

  return stac
}

/**
 * Fetch the root catalog
 *
 * @returns Root catalog
 */
async function fetchRootCatalog(stac: STAC): Promise<ICatalog> {
  const catalog = await stac.get_root_catalog("https://data.neracoos.org/stac/catalog.json")
  return catalog
}

/**
 * Hook for root catalog
 *
 * @returns hook for the root catalog
 */
export const useRootCatalogQuery = () => {
  const stac = useSTAC()

  return useQuery<ICatalog>({
    queryKey: ["stac-catalog"],
    queryFn: async () => fetchRootCatalog(stac),
    refetchOnWindowFocus: false,
  })
}

/**
 * Fetch a STAC Item by ID by iterating through catalog if necessary
 *
 * @param catalog STAC catalog that the item is contained within
 * @param id Unique ID of STAC item to request
 * @param depth Limit the search of the catalog if necessary
 * @returns Requested STAC Item
 */
async function getItemById(catalog: ICatalog, id: string, depth: number = -1): Promise<IItem> {
  const item = await catalog.get_item(id, depth)
  return item
}

/**
 * Fetch the latest STAC Item from the collection with the given ID
 *
 * @param catalog STAC catalog that the item is contained within
 * @param id Unique ID of the STAC collection to retrieve an item from
 * @param depth Limit the search of the catalog if necessary
 * @returns Latest STAC item
 */
async function getLatestItemByCollectionId(catalog: ICatalog, id: string, depth: number = -1): Promise<IItem> {
  const collection = await catalog.get_child(id, depth)
  const items = await collection.get_items()

  const item = items.reduce((a, b) => {
    const aDate = new Date(a.properties!["cube:dimensions"].forecast_reference_time.values[0])
    const bDate = new Date(b.properties!["cube:dimensions"].forecast_reference_time.values[0])

    if (aDate.valueOf() < bDate.valueOf()) {
      return b
    }
    return a
  })
  return item
}

/**
 * Load a STAC child Catalog or Collection by URL
 *
 * @param url URL of catalog or collection to load
 * @param parent Optional parent to assign to loaded catalog or collection
 * @param root_catalog Optional root catalog to associate with loaded data
 * @returns requested Catalog or Collection
 */
export async function getChildByUrl(
  url: string,
  stac: STAC,
  parent?: ICatalog | ICollection,
  root_catalog?: ICatalog,
): Promise<ICatalog | ICollection> {
  return (await stac.get(url, { parent, root: root_catalog })) as ICatalog | ICollection
}

/**
 * Load STAC Item by URL
 *
 * @param url Absolute URL to STAC Item to load
 * @param parent Optional parent to assign to Item
 * @param root_catalog Optional root catalog to assign to Item
 * @returns requested Item
 */
export async function getItemByUrl(
  url: string,
  stac: STAC,
  parent?: ICatalog | ICollection,
  root_catalog?: ICatalog,
): Promise<IItem> {
  return (await stac.get(url, { parent, root: root_catalog })) as IItem
}

/**
 * Load a STAC Item by ID
 *
 * Probably want to use useLatestItemByCollectionIdQuery as in
 * most cases the collection ID is used rather than the item ID
 *
 * @param id ID of STAC Item to load from root catalog
 * @param enabled Should this query be run
 * @returns STAC Item
 */
export function useItemByIdQuery(id: string, enabled: boolean = true) {
  const catalogQuery = useRootCatalogQuery()
  return useQuery<IItem>({
    queryKey: ["get-stac-item", { catalog: catalogQuery?.data?.id, id }],
    queryFn: () => getItemById(catalogQuery.data!, id),
    refetchOnWindowFocus: false,
    enabled: enabled && !!catalogQuery.data,
  })
}

/**
 * Load the latest STAC Item by Collection ID
 *
 * @param id ID of STAC Collection to load from root catalog
 * @param enabled Should the query be run
 * @returns STAC Item
 */
export function useLatestItemByCollectionIdQuery(id: string, enabled: boolean = true) {
  const catalogQuery = useRootCatalogQuery()
  return useQuery<IItem>({
    queryKey: ["get-latest-stac-item-by-collection", { catalog: catalogQuery?.data?.id, id }],
    queryFn: () => getLatestItemByCollectionId(catalogQuery.data!, id),
    refetchOnWindowFocus: false,
    enabled: enabled && !!catalogQuery.data,
  })
}

/**
 * Load multiple STAC Items by ids
 *
 * @param ids Array of STAC Item ids to load
 * @param enabled Should this query currently run
 * @returns STAC Items
 */
export function useItemsByIdsQuery(ids: string[], enabled: boolean = true) {
  const catalogQuery = useRootCatalogQuery()
  return useQueries<IItem[]>({
    queries: ids.map((id) => {
      return {
        queryKey: ["get-stac-item", { catalog: catalogQuery?.data?.id, id }],
        queryFn: () => getItemById(catalogQuery.data!, id),
        refetchOnWindowFocus: false,
        enabled: enabled && !!catalogQuery.data,
      }
    }),
  })
}

/**
 * Load multiple STAC items that are the latest given their Collection IDs
 *
 * @param ids Array of STAC Collections to load Items from
 * @param enabled Should this query currently run
 * @returns Latest STAC item for each collection ID
 */
export function useLatestItemsByCollectionIdsQuery(ids: string[], enabled: boolean = true) {
  const catalogQuery = useRootCatalogQuery()
  return useQueries<IItem[]>({
    queries: ids.map((id) => {
      return {
        queryKey: ["get-latest-stac-item-by-collection", { catalog: catalogQuery?.data?.id, id }],
        queryFn: () => getLatestItemByCollectionId(catalogQuery.data!, id),
        refetchOnWindowFocus: false,
        enabled: enabled && !!catalogQuery.data,
      }
    }),
  })
}
