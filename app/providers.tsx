"use client"
import { useState } from "react"
import dynamic from "next/dynamic"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { GAListener } from "Shared/google-analytics"

const ReduxStore = dynamic(() => import("./store.tsx"), { ssr: false })

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
      <ReduxStore>
        <GAListener trackingId={process.env.NODE_ENV === "production" ? "G-MVZR2D0XKJ" : undefined}>
          {children}
          <ReactQueryDevtools />
        </GAListener>
      </ReduxStore>
    </QueryClientProvider>
  )
}
