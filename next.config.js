/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PUBLIC_URL: "",
  },
  experimental: {
    craCompat: false,
    instrumentationHook: true,
    serverComponentsExternalPackages: ["web-worker"],
  },
  // Remove this to leverage Next.js' static image handling
  // read more here: https://nextjs.org/docs/api-reference/next/image
  // images: {
  //   disableStaticImages: true
  // }
  output: "standalone",
  redirects: async () => {
    return [
      // Redirects for tide gauge signs https://github.com/gulfofmaine/Neracoos-1-Buoy-App/issues/3011
      {
        source: "/s/fore-river-tide-gauge",
        destination: "/platform/Fore%20River%20Tide%20Gauge",
        permanent: false,
      },
      {
        source: "/s/machias-tide-gauge",
        destination: "/platform/Machias%20tide%20gauge",
        permanent: false,
      },
      {
        source: "/s/boothbay-harbor-tide-gauge",
        destination: "/platform/Boothbay%20Harbor%20Tide%20Gauge",
        permanent: false,
      },
      {
        source: "/s/port-clyde-tide-gauge",
        destination: "/platform/Port%20Clyde%20Tide%20Gauge",
        permanent: false,
      },
    ]
  },
}

// Injected content via Sentry wizard below

const { withSentryConfig } = require("@sentry/nextjs")

module.exports = withSentryConfig(
  nextConfig,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: "gulf-of-maine-research-institu",
    project: "neracoos-mariners-dashboard",
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
  },
)
