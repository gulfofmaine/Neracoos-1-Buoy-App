// import "./index.scss"
/**
 * Root module for the Mariners Dashboard.
 */
import "react-app-polyfill/ie11" // Polyfill for Internet Explorer compatability
import "react-app-polyfill/stable"

import * as Sentry from "@sentry/react"
import { HistoryRouter } from "redux-first-history/rr6"

import moment from "moment-timezone"
import * as React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import GAListener from "Shared/google-analytics"

import App from "./App"
import { queryClient } from "./queryClient"
import { history, store } from "./store"
import { FiveHundredPage } from "./Pages/500"

declare global {
  interface Window {
    moment: any
  }
}

window.moment = moment

const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Sentry.ErrorBoundary showDialog={true} fallback={() => <FiveHundredPage />}>
            <GAListener trackingId={process.env.NODE_ENV === "production" ? "G-MVZR2D0XKJ" : undefined}>
              <App />
            </GAListener>
          </Sentry.ErrorBoundary>
        </HistoryRouter>
        <ReactQueryDevtools />
      </Provider>
    </QueryClientProvider>
  )
}

export default Index
