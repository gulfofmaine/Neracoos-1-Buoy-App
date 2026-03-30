import { DehydratedPlatforms } from "Features/ERDDAP/hooks/DehydrateComponent"

import { PlatformTabs } from "./tabs"

export default async function PlatformTabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <DehydratedPlatforms>
      <div className="mt-5">
        <PlatformTabs />
        {children}
      </div>
    </DehydratedPlatforms>
  )
}
