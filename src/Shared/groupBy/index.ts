export function groupBy<T>(arr: T[], by: string): { [key: string]: T[] } {
  return arr.reduce((r, a) => {
    let byKey: string
    if (typeof a[by] !== "string") {
      byKey = JSON.stringify(a[by])
    } else {
      byKey = a[by]
    }
    r[byKey] = r[byKey] || []
    r[byKey].push(a)
    return r
  }, Object.create(null))
}
