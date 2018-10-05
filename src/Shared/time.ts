export function todayIso(): Date {
    const today = new Date()
    today.setHours(-(today.getTimezoneOffset() / 60))
    today.setMinutes(0)
    today.setSeconds(0)
    today.setMilliseconds(0)

    return today
}

export function shortIso(date: Date): string {
    return date.toISOString().split('.')[0] + 'Z'
}
