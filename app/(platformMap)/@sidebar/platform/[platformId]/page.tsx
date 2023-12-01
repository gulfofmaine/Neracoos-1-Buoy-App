import { DehydratedPlatforms } from "Features/ERDDAP/hooks/DehydrateComponent"
import { PlatformInfo } from "Pages/Platforms/platformInfo"
import React, { useEffect, useState } from "react"

export default async function PlatformSidebar({ params }: { params: { platformId: string } }) {
  const platformId = decodeURIComponent(params.platformId)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (isClient) {
    return (
      <DehydratedPlatforms>
        <PlatformInfo id={platformId} />
      </DehydratedPlatforms>
    )
  }
  return null
}
