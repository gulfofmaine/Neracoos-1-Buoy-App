import { PlatformInfo } from "Pages/Platforms/platformInfo"
import React from "react"

export default async function PlatformSidebar({ params }: { params: { platformId: string } }) {
  const platformId = decodeURIComponent(params.platformId)

  return (
    // <DehydratedPlatforms>
    <PlatformInfo id={platformId} />
    // </DehydratedPlatforms>
  )
}
