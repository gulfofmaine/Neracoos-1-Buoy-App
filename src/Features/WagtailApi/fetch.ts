import { WagtailContent } from "./constants"

/**
 * Format the URL to load from the content server
 *
 * @param pageId Unique ID of page
 */
export function pageUrl(pageId: string): string {
  return "https://content.gmri.io/api/pages/" + pageId + "/?format=json"
}

/**
 * Next.js app data fetcher
 *
 * @param pageId string identifier of page to load
 */
export async function fetchPageById(pageId: string) {
  const url = pageUrl(pageId)

  const result = await fetch(url, { next: { revalidate: 15 * 60 } })

  if (!result.ok) {
    throw new Error("Failed to fetch data from Wagtail")
  }

  const json = (await result.json()) as WagtailContent

  return json
}
