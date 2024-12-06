import { DehydratedPlatforms } from "Features/ERDDAP/hooks/DehydrateComponent"

import { regionList } from "Shared/constants"
import { Region } from "Shared/regions"

import { RegionList } from "./region"
import { useDecodedUrl } from "util/hooks"

export default function RegionSidebar({ params }: { params: { regionId: string } }) {
  const regionId = useDecodedUrl(params.regionId)

  let region: Region | undefined = regionList.find((r) => r.slug === regionId)

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

export async function generateStaticParams() {
  return regionList.map((region) => ({
    regionId: region.slug,
  }))
}
