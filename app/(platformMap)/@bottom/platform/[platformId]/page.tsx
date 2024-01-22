import { DehydratedPlatforms } from "Features/ERDDAP/hooks/DehydrateComponent"

import { useDecodedUrl } from "util/hooks"
import { CurrentConditions } from "./current_conditions"

export default function CurrentConditionsPage({ params: { platformId } }: { params: { platformId: string } }) {
  const id = useDecodedUrl(platformId)
  return (
    <DehydratedPlatforms>
      <CurrentConditions platformId={id} />
    </DehydratedPlatforms>
  )
}
