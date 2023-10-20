// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs"

/**
 * Load our package.json so that we can access the version
 * and allow Sentry to track errors in relation to the version used
 */
// tslint:disable-next-line:no-var-requires
const packageJson = require("./package.json")

Sentry.init({
  dsn: "https://eab04522f42c4efab9d5bfe7d8594e9c@o181061.ingest.sentry.io/1270344",

  release: `v${packageJson.version}`,

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 0.05,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  replaysOnErrorSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.05,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    new Sentry.Replay({
      // Additional Replay configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
})
