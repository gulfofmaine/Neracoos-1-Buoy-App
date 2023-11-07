import { DehydratedPlatforms } from "Features/ERDDAP/hooks/DehydrateComponent"

import { PlatformInfo } from "Pages/Platforms/platformInfo"

export default async function PlatformSidebar({ params }: { params: { platformId: string } }) {
  const platformId = decodeURIComponent(params.platformId)

  return (
    <DehydratedPlatforms>
      <PlatformInfo id={platformId} />
    </DehydratedPlatforms>
  )
}
