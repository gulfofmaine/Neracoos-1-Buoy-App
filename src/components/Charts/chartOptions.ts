// Types come from the same declaration file `@highcharts/react` uses, as `highcharts` itself resolves to a different copy
import type { Options } from "highcharts/highcharts.src"

/**
 * Options shared by every chart.
 *
 * `@highcharts/react` leaves Highcharts' defaults on (a "Chart title" and the Highcharts.com credits),
 * which the charts here never displayed, so switch them off. Dates are displayed in UTC.
 */
export const baseChartOptions: Options = {
  time: {
    timezone: "UTC",
  },
  title: {
    text: "",
  },
  credits: {
    enabled: false,
  },
}

/** Base options for charts that have no legend. Charts with a legend should render a `<Legend />` instead. */
export const noLegendChartOptions: Options = {
  ...baseChartOptions,
  legend: {
    enabled: false,
  },
}
