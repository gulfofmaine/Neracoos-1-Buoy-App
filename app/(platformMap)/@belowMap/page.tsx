import { DehydratedPlatforms } from "Features/ERDDAP/hooks/DehydrateComponent"

import { HomeSuperlatives } from "./home"

export default async function IndexBelowMap() {
  return (
    <DehydratedPlatforms>
      <HomeSuperlatives />
    </DehydratedPlatforms>
  )
}
