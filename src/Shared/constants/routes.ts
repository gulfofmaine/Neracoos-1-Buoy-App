/**
 * URL paths for various pages
 */
export const paths = {
  about: "/about",
  home: "/",
  map: "/map",
  regions: {
    root: "/region/",
    region: "/region/:id",
  },
  platforms: {
    all: "/platform/:id/observations/all",
    forecast: "/platform/:id/forecast",
    forecastType: "/platform/:id/forecast/:type",
    observations: "/platform/:id/observations/:type",
    observationsWind: "/platform/:id/observations/wind",
    platform: "/platform/:id",
    platform_tailing: "/platform/:id/*",
    root: "/platform/",
    root_tailing: "/platform/*",
  },
  neracoos: "http://neracoos.org",
  models: "/models/",
  waterLevel: {
    root: "/water-level/",
    sensor: "/water-level/sensor/:id",
  },
}
