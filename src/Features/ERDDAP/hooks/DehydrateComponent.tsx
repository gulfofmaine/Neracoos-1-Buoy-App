import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"

import { getPlatforms, usePlatformsQueryKey } from "./buoyBarnQueries"

/**
 * Load and cache platforms with ReactQuery for underlying components to use
 */
export async function DehydratedPlatforms({ children }) {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: usePlatformsQueryKey,
    queryFn: getPlatforms,
  })

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>
}
