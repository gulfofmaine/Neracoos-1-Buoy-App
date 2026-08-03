// Sentry config for the edge runtime, imported by instrumentation.ts.
// Kept separate from sentry.server.config.ts (see comment there) since the
// edge SDK build doesn't export spotlightIntegration.

import * as Sentry from "@sentry/nextjs"

// tslint:disable-next-line:no-var-requires
const packageJson = require("../package.json")

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN ?? "__dsn__",

  release: `v${packageJson.version}`,

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: process.env.NODE_ENV === "development" ? 1 : 0.05,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
})
