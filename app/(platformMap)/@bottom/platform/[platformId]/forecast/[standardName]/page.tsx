import { DehydratedPlatforms } from "Features/ERDDAP/hooks/DehydrateComponent"

import { ForecastChart } from "./forecast"

export default function ForecastPage({ params }: { params: { platformId: string; standardName: string } }) {
  return (
    <DehydratedPlatforms>
      <ForecastChart {...params} />
    </DehydratedPlatforms>
  )
}
