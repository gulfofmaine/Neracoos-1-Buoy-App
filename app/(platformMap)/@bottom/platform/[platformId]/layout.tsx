import { DehydratedPlatforms } from "Features/ERDDAP/hooks/DehydrateComponent"

import { PlatformTabs } from "./tabs"

export default async function PlatformTabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <DehydratedPlatforms>
      <div style={{ marginTop: "1rem" }}>
        <PlatformTabs />
        {children}
      </div>
    </DehydratedPlatforms>
  )
}
