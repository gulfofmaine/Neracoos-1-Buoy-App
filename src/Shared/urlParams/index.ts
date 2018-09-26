export default function urlParams(urlParamString: string): any {
    const pairs = urlParamString.substring(1).split('&')
    const params = {}
    // tslint:disable-next-line:forin
    for (const index in pairs) {
        const pair = pairs[index]
        const [key, value] = pair.split('=')
        params[key] = value
    }
    return params
}   

export function urlPartReplacer(url: string, key: string, value: string): string {
    return url.split('/').map((part) => part === key ? value : part).join('/')
}
