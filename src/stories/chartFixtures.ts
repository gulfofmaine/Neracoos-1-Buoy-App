/**
 * Deterministic fixtures and helpers for chart stories, used by the screenshot regression tests.
 */
import { DataTimeSeries, StyledTimeSeries } from "Shared/timeSeries"

/** The instant "now" is frozen to for chart stories */
export const FROZEN_NOW = new Date("2020-10-01T12:00:00.000Z")

/**
 * Freeze `new Date()` / `Date.now()` so that charts which depend on the current time render identically.
 * Intended for use in a story's `beforeEach`, which may return a cleanup function.
 */
export function freezeTime(now: Date = FROZEN_NOW) {
  const RealDate = globalThis.Date
  const fixed = now.valueOf()

  class FrozenDate extends RealDate {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args: any[]) {
      if (args.length === 0) {
        super(fixed)
      } else {
        super(...(args as [number]))
      }
    }

    static now() {
      return fixed
    }
  }

  globalThis.Date = FrozenDate as DateConstructor

  return () => {
    globalThis.Date = RealDate
  }
}

/** Generate an evenly spaced sinusoidal time series */
export function sineSeries(
  name: string,
  {
    start = new Date("2020-09-29T12:00:00.000Z"),
    hours = 72,
    stepMinutes = 30,
    mean = 5,
    amplitude = 2,
    periodHours = 12.4,
    phase = 0,
  } = {},
): DataTimeSeries {
  const steps = Math.floor((hours * 60) / stepMinutes)
  const timeSeries = Array.from({ length: steps + 1 }, (_, i) => {
    const hoursIn = (i * stepMinutes) / 60
    return {
      time: new Date(start.valueOf() + i * stepMinutes * 60 * 1000),
      reading: mean + amplitude * Math.sin((2 * Math.PI * hoursIn) / periodHours + phase),
    }
  })

  return { name, unit: "m", displayName: name, type: "Observation", timeSeries }
}

/** A few styled series for the multiple time series charts */
export const multipleSeries: StyledTimeSeries[] = [
  { ...sineSeries("Observed", { amplitude: 2, mean: 5 }), color: "#00736d" },
  { ...sineSeries("Forecast", { amplitude: 1.5, mean: 4.5, phase: 0.6 }), dashStyle: "Dash", color: "#ea4f12" },
  { ...sineSeries("Climatology", { amplitude: 0.5, mean: 5.5, periodHours: 24 }), dashStyle: "ShortDot" },
]
