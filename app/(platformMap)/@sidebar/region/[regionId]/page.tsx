import { use } from "react"

import { DehydratedPlatforms } from "Features/ERDDAP/hooks/DehydrateComponent"
import { regionList } from "Shared/constants"
import type { Region } from "Shared/regions"
import { useDecodedUrl } from "util/hooks"

import { RegionList } from "./region"

export default function RegionSidebar(props: { params: Promise<{ regionId: string }> }) {
  const params = use(props.params)
  const regionId = useDecodedUrl(params.regionId)

  const region: Region | undefined = regionList.find((r) => r.slug === regionId)

  if (typeof region === "undefined") {
    return null
  }

  return (
    <div>
      <h2>Platforms in {region.name}</h2>
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
