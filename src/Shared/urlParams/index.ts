interface UrlParams {
  [key: string]: string
}

/**
 * Return key, value pairs for a url parameter string
 *
 * @param urlParamString Parameter string from url. With react-router it would be urlParams(this.props.location.search)
 * @returns object with key, value pairs from the given url parameter string
 */
export const urlParams = (urlParamString: string): UrlParams => {
  const pairs = urlParamString.substring(1).split("&")
  const params = {}

  pairs.forEach(pair => {
    const [key, value] = pair.split("=")
    params[key] = value
  })

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
export const urlPartReplacer = (url: string, key: string, value: string): string => {
  return url
    .split("/")
    .map(part => (part === key ? value : part))
    .join("/")
}
