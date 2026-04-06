import { use } from "react"
import { DehydratedPlatforms } from "Features/ERDDAP/hooks/DehydrateComponent"

import { regionList } from "Shared/constants"
import { Region } from "Shared/regions"

import { RegionList, NextRegion } from "./region"
import { useDecodedUrl } from "util/hooks"

export default function RegionSidebar(props: { params: Promise<{ regionId: string }> }) {
  const params = use(props.params)
  const regionId = useDecodedUrl(params.regionId)

  let region: Region | undefined = regionList.find((r) => r.slug === regionId)

  if (typeof region === "undefined") {
    return null
  }

  return (
    <div>
      <h2>Platforms in {region.name}</h2>
      <div className="row mb-2 align-items-center">
        <div className="d-flex col-6">
          <NextRegion region={region} offset={-1} />
        </div>
        <div className="d-flex col-6 justify-content-end">
          <NextRegion region={region} offset={1} />
        </div>
      </div>
      <DehydratedPlatforms>
        <RegionList region={region} />
      </DehydratedPlatforms>
    </div>
  )
}

// export async function generateStaticParams() {
//   return regionList.map((region) => ({
//     regionId: region.slug,
//   }))
// }
