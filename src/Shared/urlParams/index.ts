import React from "react"
import { useSearchParams, usePathname } from "next/navigation"
import { useRouter } from "next-nprogress-bar"

import { DatumOffsetOptions } from "Features/ERDDAP/types"

/**
 * Return key, value pairs for a url parameter string
 *
 * @param urlParamString Parameter string from url. With react-router it would be urlParams(this.props.location.search)
 * @returns object with key, value pairs from the given url parameter string
 */
export default function urlParams(urlParamString: string): any {
  const pairs = urlParamString.substring(1).split("&")
  const params = {}
  // tslint:disable-next-line:forin
  for (const index in pairs) {
    const pair = pairs[index]
    const [key, value] = pair.split("=")
    params[key] = value
  }
  return params
}

/**
 * Replace parts of of a react-router URL
 *
 * @param url Source URL with keys to be replaces in the form of /path/:key/to
 * @param key Key to be replaced with leading identifier `:key`
 * @param value Value to replace `:key` with.
 * @returns Url with reformatted string.
 */
export function urlPartReplacer(url: string, key: string, value: string): string {
  return url
    .split("/")
    .map((part) => (part === key ? value : part))
    .join("/")
}


function formatDate(d: Date) {
  return d.toISOString()
}

export const buildSearchParamsQuery = (start?: Date, end?: Date, datum?: DatumOffsetOptions) => {
  if (datum && start && end) {
    return {
      start: formatDate(start),
      end: formatDate(end),
      datum,
    }
  } else if (datum && !start && !end) {
    return { datum }
  } else if (start && end && !datum) {
    return { start: formatDate(start), end: formatDate(end) }
  } else return null
}

/**
 * Get and set string query params
 * @param key query param key
 */
export function useStringQueryParam(key: string): [string | null, (newQuery: string) => void] {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const setSearchParams = React.useCallback(
    (newSearchParams: URLSearchParams) => {
      router.push(pathname + "?" + newSearchParams.toString())
    },
    [router, pathname],
  )

  const paramValue = searchParams.get(key)

  const value: string | null = React.useMemo(() => paramValue, [paramValue])

  const setValue = React.useCallback(
    (newValue: string) => {
      let newSearchParams = new URLSearchParams(searchParams)
      newSearchParams.set(key, newValue)
      setSearchParams(newSearchParams)
    },
    [key, searchParams, setSearchParams],
  )

  return [value, setValue]
}
