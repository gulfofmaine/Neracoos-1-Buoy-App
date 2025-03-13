"use client"
import dynamic from "next/dynamic"
import { AppProgressProvider as ProgressProvider } from "@bprogress/next"
import { isServer, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { GAListener } from "Shared/google-analytics"

const ReduxStore = dynamic(() => import("./store.tsx"), { ssr: false })

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
      },
    },
  })
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
  if (isServer) {
    // Always make a new client on the server
    return makeQueryClient()
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) {
      browserQueryClient = makeQueryClient()
    }
    return browserQueryClient
  }
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ReduxStore>
        <ProgressProvider height="4px" color="#ffcd22" options={{ showSpinner: false }} shallowRouting>
          <GAListener trackingId={process.env.NODE_ENV === "production" ? "G-MVZR2D0XKJ" : undefined}>
            {children}
            <ReactQueryDevtools />
          </GAListener>
        </ProgressProvider>
      </ReduxStore>
    </QueryClientProvider>
  )
}
