import { notFound } from "next/navigation"

import { DehydratedPlatforms } from "Features/ERDDAP/hooks/DehydrateComponent"
import { platformExists } from "Features/ERDDAP/hooks/buoyBarnQueries"

import { PlatformTabs } from "./tabs"

export default async function PlatformTabsLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ platformId: string }>
}) {
  const { platformId } = await params

  // Only 404 when Buoy Barn responded and doesn't know the platform,
  // so an outage still falls through to the regular error handling.
  if ((await platformExists(decodeURIComponent(platformId))) === false) {
    notFound()
  }

  return (
    <DehydratedPlatforms>
      <PlatformTabs />
      {children}
    </DehydratedPlatforms>
  )
}
