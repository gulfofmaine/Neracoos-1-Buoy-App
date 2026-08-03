// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs"

/**
 * Load our package.json so that we can access the version
 * and allow Sentry to track errors in relation to the version used
 */
// tslint:disable-next-line:no-var-requires
const packageJson = require("../package.json")

/**
 * The browser can't resolve the "spotlight" Docker service hostname, and in
 * forwarded-port dev environments (e.g. GitHub Codespaces) it may not even be
 * on the same machine. Forwarded-port hosts expose each port under a
 * "<name>-<port>.<domain>" hostname, so derive Spotlight's URL from whatever
 * origin the page is actually being viewed from. Returns undefined when the
 * current hostname doesn't match that pattern (e.g. local Docker Desktop),
 * letting the SDK fall back to its "http://localhost:8969/stream" default.
 */
function spotlightSidecarUrl() {
  const match = window.location.hostname.match(/^(.*)-\d+(\..+)$/)
  if (!match) return undefined
  return `${window.location.protocol}//${match[1]}-8969${match[2]}/stream`
}

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN ?? "__dsn__",

  release: `v${packageJson.version}`,

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: process.env.NODE_ENV === "development" ? 1 : 0.05,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  replaysOnErrorSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: process.env.NODE_ENV === "development" ? 1 : 0.05,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    Sentry.replayIntegration({
      // Additional Replay configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
    ...(process.env.NEXT_PUBLIC_SENTRY_SPOTLIGHT
      ? [Sentry.spotlightBrowserIntegration({ sidecarUrl: spotlightSidecarUrl() })]
      : []),
  ],
})

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
