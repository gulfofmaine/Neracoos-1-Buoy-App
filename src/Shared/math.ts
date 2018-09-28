export function round(num: number, significantDigits: number = 2): number {
    return Math.ceil(num * Math.pow(10, significantDigits)) / Math.pow(10, significantDigits)
}
