"use client"
import { useState } from "react"
import { Provider } from "react-redux"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { GAListener } from "Shared/google-analytics"

import { store } from "./store"

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <GAListener trackingId={process.env.NODE_ENV === "production" ? "G-MVZR2D0XKJ" : undefined}>
          {children}
          <ReactQueryDevtools />
        </GAListener>
      </Provider>
    </QueryClientProvider>
  )
}
