import { DehydratedPlatforms } from "Features/ERDDAP/hooks/DehydrateComponent"

import { AllObservations } from "./all_observations"

export default async function AllObservationsPage(props: { params: Promise<{ platformId: string }> }) {
  const params = await props.params

  const { platformId } = params

  return (
    <DehydratedPlatforms>
      <AllObservations platformId={platformId} />
    </DehydratedPlatforms>
  )
}
