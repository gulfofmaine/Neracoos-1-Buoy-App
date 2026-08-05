import * as Sentry from "@sentry/nextjs"

// The server and edge runtimes get bundled separately; importing each config
// only from its matching branch keeps runtime-specific SDK code (like
// spotlightIntegration, which the edge build doesn't export) out of the
// wrong bundle. See sentry.server.config.ts / sentry.edge.config.ts.
export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config")
  }
  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config")
  }
}

// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#errors-from-nested-react-server-components
export const onRequestError = Sentry.captureRequestError
