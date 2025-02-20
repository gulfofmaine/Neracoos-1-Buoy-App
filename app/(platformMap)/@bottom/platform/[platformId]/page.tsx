import { use } from "react"
import { DehydratedPlatforms } from "Features/ERDDAP/hooks/DehydrateComponent"

import { useDecodedUrl } from "util/hooks"
import { CurrentConditions } from "./current_conditions"

export default function CurrentConditionsPage(props: { params: Promise<{ platformId: string }> }) {
  const params = use(props.params)

  const { platformId } = params

  const id = useDecodedUrl(platformId)
  return (
    <DehydratedPlatforms>
      <CurrentConditions platformId={id} />
    </DehydratedPlatforms>
  )
}
