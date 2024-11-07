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

export const buildSearchParamsQuery = (start: string, end: string, datum: DatumOffsetOptions) => {
  if (datum && start && end) {
    return {
      start,
      end,
      datum,
    }
  } else if (datum && !start && !end) {
    return { datum }
  } else if (start && end && !datum) {
    return { start, end }
  } else return null
}
