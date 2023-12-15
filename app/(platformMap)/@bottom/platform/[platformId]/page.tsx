import { DehydratedPlatforms } from "Features/ERDDAP/hooks/DehydrateComponent"

import { CurrentConditions } from "./current_conditions"

export default function CurrentConditionsPage({ params: { platformId } }: { params: { platformId: string } }) {
  return (
    <DehydratedPlatforms>
      <CurrentConditions platformId={decodeURIComponent(platformId)} />
    </DehydratedPlatforms>
  )
}
