import * as Sentry from '@sentry/nextjs';

/**
 * Load our package.json so that we can access the version
 * and allow Sentry to track errors in relation to the version used
 */
// tslint:disable-next-line:no-var-requires
const packageJson = require("./package.json")

export function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs' || process.env.NEXT_RUNTIME === 'edge') {
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN ?? "__dsn__",
      spotlight: process.env.NODE_ENV === "development",

      release: `v${packageJson.version}`,

      // Adjust this value in production, or use tracesSampler for greater control
      tracesSampleRate: 0.05,

      // Setting this option to true will print useful information to the console while you're setting up Sentry.
      debug: false,
    });
  }
}
