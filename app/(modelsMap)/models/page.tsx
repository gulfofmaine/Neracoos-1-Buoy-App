import { DehydratedPlatforms } from "Features/ERDDAP/hooks/DehydrateComponent"
import { ModelingPage } from "./modeling"

export default async function ModelingIndexPage() {
  return (
    <DehydratedPlatforms>
      <ModelingPage />
    </DehydratedPlatforms>
  )
}
