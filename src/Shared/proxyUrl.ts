

export function proxytizeUrl(url: string): string {
    if (url.indexOf('neracoos.org') > 0) {
        if (process.env.NODE_ENV === 'development') {
            return "http://localhost:3000/" + url.split('org/')[1]
        } else {
            return url
        }
    }
    return 'http://www.neracoos.org/proxy2?ajax=1&url=' + encodeURIComponent(url)
}
