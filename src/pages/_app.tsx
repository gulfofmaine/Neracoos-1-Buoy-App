import { AppProps } from "next/app"
import Head from "next/head"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { Provider } from "react-redux"
import { QueryClient, QueryClientProvider } from "react-query"
import { Hydrate } from "react-query/hydration"
import { ReactQueryDevtools } from "react-query/devtools"

import * as gtag from "Shared/google-analytics"

import { store } from "../store"

import "bootstrap/dist/css/bootstrap.min.css"
import "ol/ol.css"
import "../App.css"

const queryClient = new QueryClient()

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
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
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </Provider>
    </React.Fragment>
  )
}

export default MyApp
