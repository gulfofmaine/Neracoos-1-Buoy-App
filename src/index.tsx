/**
 * Root module for the Mariners Dashboard.
 */
import "react-app-polyfill/ie11" // Polyfill for Internet Explorer compatability
import "react-app-polyfill/stable"

import * as Sentry from "@sentry/react"
import { Event } from "@sentry/types"

import moment from "moment-timezone"
import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ReactQueryDevtools } from "react-query-devtools"

import "./index.css"
import { store } from "./store"

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

/**
 * Render our root element of the App.
 * Everything else descends from this render.
 */
ReactDOM.render(
  <Provider store={store}>
    <h1>Old app</h1>
    <ReactQueryDevtools />
  </Provider>,
  document.getElementById("root") as HTMLElement
)
