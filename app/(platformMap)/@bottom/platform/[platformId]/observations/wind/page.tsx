import { DehydratedPlatforms } from "Features/ERDDAP/hooks/DehydrateComponent"

import { WindChart } from "./chart"

export default function WindPlot({ params: { platformId } }: { params: { platformId: string } }) {
  return (
    <DehydratedPlatforms>
      <WindChart platformId={platformId} />
    </DehydratedPlatforms>
  )
}
