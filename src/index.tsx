/**
 * Root module for the Mariners Dashboard.
 */
import "react-app-polyfill/ie11" // Polyfill for Internet Explorer compatability
import "react-app-polyfill/stable"

import * as Sentry from "@sentry/react"
import { Event } from "@sentry/types"
import { ConnectedRouter } from "connected-react-router"

import moment from "moment-timezone"
import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

import GAListener from "Shared/google-analytics"

import App from "./App"
import "./index.css"
import { history, store } from "./store"

import "bootstrap/dist/css/bootstrap.min.css"

declare global {
  interface Window {
    moment: any
  }
}

window.moment = moment

/**
 * Load our package.json so that we can access the version
 * and allow Sentry to track errors in relation to the version used
 */
// tslint:disable-next-line:no-var-requires
const packageJson = require("../package.json")

// Disable Sentry if we are testing with Cypress
if (!(window as any).Cypress) {
  Sentry.init({
    dsn: "https://eab04522f42c4efab9d5bfe7d8594e9c@sentry.io/1270344",
    beforeSend(event: Event) {
      if (event.exception) {
        if (event.extra && "skipDialog" in event.extra) {
          // pass
        } else {
          Sentry.showReportDialog()
        }
      }
      return event
    },
    release: packageJson.version,
  })
}

const queryClient = new QueryClient()

/**
 * Render our root element of the App.
 * Everything else descends from this render.
 */
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <GAListener trackingId={process.env.NODE_ENV === "production" ? "UA-179432706-1" : undefined}>
          <App />
        </GAListener>
      </ConnectedRouter>
      <ReactQueryDevtools />
    </Provider>
  </QueryClientProvider>,
  document.getElementById("root") as HTMLElement
)
