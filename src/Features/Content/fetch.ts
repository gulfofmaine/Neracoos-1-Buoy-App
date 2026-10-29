import * as Sentry from "@sentry/nextjs"
import { readFile } from "node:fs/promises"
import path from "node:path"

/** Names of the content pages stored in the `content/` directory */
export type ContentName = "about" | "sidebar"

/** How long to wait for GitHub before falling back to the bundled content */
export const FETCH_TIMEOUT_MS = 5 * 1000

/**
 * Format the URL to load content from GitHub
 *
 * @param name Name of content file (without extension)
 */
export function contentUrl(name: ContentName): string {
  return `https://raw.githubusercontent.com/gulfofmaine/Neracoos-1-Buoy-App/main/content/${name}.html`
}

/**
 * Read the copy of the content bundled with the app
 *
 * @param name Name of content file (without extension)
 */
export async function readBundledContent(name: ContentName): Promise<string> {
  return readFile(path.join(process.cwd(), "content", `${name}.html`), "utf8")
}

/**
 * Next.js app data fetcher
 *
 * Loads the latest content from GitHub, falling back to the bundled copy
 * (and reporting to Sentry) if the remote content can not be loaded.
 *
 * @param name Name of content to load
 */
export async function fetchContent(name: ContentName): Promise<string> {
  const url = contentUrl(name)

  try {
    const result = await fetch(url, {
      next: { revalidate: 15 * 60 },
      // Next.js drops the signal for background revalidations, so this only bounds cache misses
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    })

    if (result.ok) {
      return await result.text()
    }

    Sentry.captureException(new Error(`Failed to fetch content from GitHub: ${result.status}`), {
      level: "warning",
      tags: { content: name },
      extra: { name, url, status: result.status },
    })
  } catch (error) {
    Sentry.captureException(error, {
      level: "warning",
      tags: { content: name },
      extra: { name, url },
    })
  }

  return readBundledContent(name)
}
