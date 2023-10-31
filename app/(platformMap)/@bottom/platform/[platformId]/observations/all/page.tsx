import { DehydratedPlatforms } from "Features/ERDDAP/hooks/DehydrateComponent"

import { AllObservations } from "./all_observations"

export default function AllObservationsPage({ params: { platformId } }: { params: { platformId: string } }) {
  return (
    <DehydratedPlatforms>
      <AllObservations platformId={platformId} />
    </DehydratedPlatforms>
  )
}
