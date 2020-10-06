import { AppProps } from "next/app"
import React from "react"
import { Provider } from "react-redux"
import { ReactQueryCacheProvider, QueryCache } from "react-query"
import { Hydrate } from "react-query/hydration"
import { ReactQueryDevtools } from "react-query-devtools"

import { store } from "../store"

import "bootstrap/dist/css/bootstrap.min.css"
import "ol/ol.css"
import "../App.css"

const queryCache = new QueryCache()

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </Hydrate>
    </ReactQueryCacheProvider>
  </Provider>
)

export default MyApp
