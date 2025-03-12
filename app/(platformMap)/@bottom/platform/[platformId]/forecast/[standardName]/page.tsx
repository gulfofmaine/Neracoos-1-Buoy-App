import { DehydratedPlatforms } from "Features/ERDDAP/hooks/DehydrateComponent"

import { ForecastChart } from "./forecast"

export default async function ForecastPage(props: { params: Promise<{ platformId: string; standardName: string }> }) {
  const params = await props.params
  return (
    <DehydratedPlatforms>
      <ForecastChart {...params} />
    </DehydratedPlatforms>
  )
}
