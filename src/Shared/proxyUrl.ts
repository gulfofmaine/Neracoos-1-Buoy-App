/**
 * Returns a URL that has been formatted for access through NERACOOS.org CORS proxy if needed.
 * @param url Source URL that may need to be proxied
 */
export function proxytizeUrl(url: string): string {
  // if (url.indexOf("neracoos.org") > 0) {
  //   if (process.env.NODE_ENV === "development") {
  //     return "http://localhost:3000/" + url.split("org/")[1]
  //   } else {
  //     return url
  //   }
  // }
  // return "http://www.neracoos.org/proxy2?ajax=1&url=" + encodeURIComponent(url)
  const proxied = process.env.NEXT_PUBLIC_PROXY_ROOT + url

  return proxied
}
