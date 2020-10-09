import { AppProps } from "next/app"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { Provider } from "react-redux"
import { ReactQueryCacheProvider, QueryCache } from "react-query"
import { Hydrate } from "react-query/hydration"
import { ReactQueryDevtools } from "react-query-devtools"

import * as gtag from "Shared/google-analytics"

import { store } from "../store"

import "bootstrap/dist/css/bootstrap.min.css"
import "ol/ol.css"
import "../App.css"

const queryCache = new QueryCache()

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <Provider store={store}>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </Hydrate>
      </ReactQueryCacheProvider>
    </Provider>
  )
}

export default MyApp
