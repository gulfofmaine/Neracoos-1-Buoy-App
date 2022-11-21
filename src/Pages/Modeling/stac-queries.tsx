import { useQuery, useQueries } from "react-query"

import STAC, { ICatalog, ICollection, IItem, IFetchData } from "@gulfofmaine/tsstac"

import { queryClient } from "queryClient"

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

// Manage the base of the stac catalog
export const stac = new STAC(reactQueryFetcher)

/**
 * Fetch the root catalog
 *
 * @returns Root catalog
 */
async function fetchRootCatalog(): Promise<ICatalog> {
  const catalog = await stac.get_root_catalog("https://data.neracoos.org/stac/catalog.json")
  return catalog
}

/**
 * Hook for root catalog
 *
 * @returns hook for the root catalog
 */
export const useRootCatalogQuery = () => {
  return useQuery<ICatalog>("stac-catalog", fetchRootCatalog, { refetchOnWindowFocus: false })
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
 * Load a STAC child Catalog or Collection by URL
 *
 * @param url URL of catalog or collection to load
 * @param parent Optional parent to assign to loaded catalog or collection
 * @param root_catalog Optional root catalog to associate with loaded data
 * @returns requested Catalog or Collection
 */
export async function getChildByUrl(
  url: string,
  parent?: ICatalog | ICollection,
  root_catalog?: ICatalog
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
  parent?: ICatalog | ICollection,
  root_catalog?: ICatalog
): Promise<IItem> {
  return (await stac.get(url, { parent, root: root_catalog })) as IItem
}

/**
 * Load a STAC Item by ID
 *
 * @param id ID of STAC Item to load from root catalog
 * @param enabled Should this query be run
 * @returns STAC Item
 */
export function useItemByIdQuery(id: string, enabled: boolean = true) {
  const catalogQuery = useRootCatalogQuery()
  return useQuery<IItem>(
    ["get-stac-item", { catalog: catalogQuery?.data?.id, id }],
    () => getItemById(catalogQuery.data!, id),
    {
      refetchOnWindowFocus: false,
      enabled: enabled && !!catalogQuery.data,
    }
  )
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
  return useQueries<IItem[]>(
    ids.map((id) => {
      return {
        queryKey: ["get-stac-item", { catalog: catalogQuery?.data?.id, id }],
        queryFn: () => getItemById(catalogQuery.data!, id),
        refetchOnWindowFocus: false,
        enabled: enabled && !!catalogQuery.data,
      }
    })
  )
}
