/**
 * URL paths for various pages
 */
export const paths = {
    about: '/about',
    home: '/',
    map: '/map',
    platforms: {
        forecast: '/platform/:id/forecast',
        observations: '/platform/:id/observations/:type',
        observationsWind: '/platform/:id/observations/wind',
        platform: '/platform/:id',
        root: '/platform/',
    }
}
