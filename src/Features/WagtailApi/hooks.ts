/**
 * React-Query custom hooks to load and cache data
 */
import * as Sentry from "@sentry/react"
import { useQuery } from "@tanstack/react-query"

import { WagtailContent } from "./constants"
import { pageUrl } from "./fetch"

/**
 * Async function to load data from Wagtail content service
 *
 * @param key unused identifier oof hook
 * @param param1 object with pageId to load from Wagtail content service
 */
async function getPageById(key, { pageId }: { pageId: string }): Promise<WagtailContent> {
  Sentry.addBreadcrumb({
    category: "Wagtail API",
    data: {
      pageId,
    },
    message: "Loading Wagtail API page",
  })

  const url = pageUrl(pageId)

  const result = await fetch(url)
  const json = (await result.json()) as WagtailContent

  return json
}

/**
 * React-Query custom hook to load and cache a page from
 * Wagtail content service.
 *
 * @param pageId string identifier of page to load
 */
export function usePage(pageId: string) {
  return useQuery(["wagtail-page", { pageId }], (key) => getPageById(key, { pageId }), {
    staleTime: 15 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
  })
}
