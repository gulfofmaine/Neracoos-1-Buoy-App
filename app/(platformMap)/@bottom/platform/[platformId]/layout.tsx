import { DehydratedPlatforms } from "Features/ERDDAP/hooks/DehydrateComponent"

import { PlatformTabs } from "./tabs"

export default async function PlatformTabsLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { platformId: string }
}) {
  const platformId = decodeURIComponent(params.platformId)

  return (
    <DehydratedPlatforms>
      <div style={{ marginTop: "1rem" }}>
        <PlatformTabs platformId={platformId} />
        {children}
      </div>
    </DehydratedPlatforms>
  )
}
