/**
 * React-Query custom hooks to load and cache data
 */
import * as Sentry from "@sentry/react"
import { useQuery } from "react-query"

import { WagtailContent } from "./constants"

/**
 * Async function to load data from Wagtail content service
 *
 * @param key unused identifier oof hook
 * @param param1 object with pageId to load from Wagtail content service
 */
export const getWagtailPageById = async (pageId) => {
  Sentry.addBreadcrumb({
    category: "Wagtail API",
    data: {
      pageId,
    },
    message: "Loading Wagtail API page",
  })

  const url = "https://content.gmri.io/api/pages/" + pageId + "/?format=json"

  const result = await fetch(url)
  const json = (await result.json()) as WagtailContent

  return json
}

/**
 * Generate a query key for loading a Wagtail Content Page
 *
 * @param pageId string identifier of the page to load
 */
export function wagtailQueryKey(pageId: string) {
  return ["wagtail-page", { pageId }]
}

/**
 * React-Query custom hook to load and cache a page from
 * Wagtail content service.
 *
 * @param pageId string identifier of page to load
 */
export function usePage(pageId: string) {
  return useQuery<WagtailContent, Error>(wagtailQueryKey(pageId), () => getWagtailPageById(pageId), {
    staleTime: 15 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
  })
}
