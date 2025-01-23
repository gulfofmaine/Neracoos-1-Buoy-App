import React from "react"
import { useSearchParams, usePathname } from "next/navigation"
import { useRouter } from "next-nprogress-bar"

import { DatumOffsetOptions } from "Features/ERDDAP/types"

import { formatDate } from "../time"

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

export const buildSearchParamsQuery = (start?: Date, end?: Date, datum?: DatumOffsetOptions) => {
  // if (datum && start && end) {
  //   return {
  //     start: formatDate(start),
  //     end: formatDate(end),
  //     datum,
  //   }
  // } else if (datum && !start && !end) {
  //   return { datum }
  // } else if (start && end && !datum) {
  //   return { start: formatDate(start), end: formatDate(end) }
  // } else return null
  const params = {}

  if (datum) {
    params["datum"] = datum.toString()
  }
  if (start) {
    params["start"] = formatDate(start)
  }
  if (end) {
    params["end"] = formatDate(end)
  }

  if (Object.keys(params).length > 0) {
    return params
  }
  return null
}

export const waterLevelPath = (platformId: string, start?: Date, end?: Date, datum?: DatumOffsetOptions) => {
  const baseUrl = `/water-level/sensor/${platformId}`

  const params = buildSearchParamsQuery(start, end, datum)

  if (params) {
    return baseUrl + "?" + new URLSearchParams(params).toString()
  }
  return baseUrl
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
      const paramValue = searchParams.get(key)

      if (newValue !== paramValue) {
        let newSearchParams = new URLSearchParams(searchParams)
        newSearchParams.set(key, newValue)
        setSearchParams(newSearchParams)
      }
    },
    [key, searchParams, setSearchParams],
  )

  return [value, setValue]
}

/**
 * Get and set string query params with a default value to fall back to and hide from the url
 * @param key Search query param key
 * @param defaultValue Default value to fall back to and hide when chosen
 * @returns
 */
export function useDefaultStringQueryParam(
  key: string,
  defaultValue: string,
): { value: string; setValue: (newQuery: string) => void } {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const setSearchParams = React.useCallback(
    (newSearchParams: URLSearchParams) => {
      router.push(pathname + "?" + newSearchParams.toString())
    },
    [router, pathname],
  )

  const value = searchParams.get(key) || defaultValue

  const setValue = React.useCallback(
    (newValue: string) => {
      if (newValue === defaultValue) {
        if (searchParams.has(key)) {
          let newSearchParams = new URLSearchParams(searchParams)
          newSearchParams.delete(key)
          setSearchParams(newSearchParams)
        }
      } else if (newValue !== searchParams.get(key)) {
        let newSearchParams = new URLSearchParams(searchParams)
        newSearchParams.set(key, newValue)
        setSearchParams(newSearchParams)
      }
    },
    [key, searchParams, setSearchParams, defaultValue],
  )

  return { value, setValue }
}
