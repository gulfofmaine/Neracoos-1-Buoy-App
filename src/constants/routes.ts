/**
 * URL paths for various pages
 */
export const paths = {
  about: "/about",
  home: "/",
  map: "/map",
  platforms: {
    forecast: "/platform/:id/forecast",
    forecastType: "/platform/:id/forecast/:type",
    observations: "/platform/:id/observations/:type",
    observationsWind: "/platform/:id/observations/wind",
    platform: "/platform/:id",
    root: "/platform/"
  }
}
