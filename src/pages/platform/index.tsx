import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import React from "react"
import { QueryCache } from "react-query"
import { dehydrate } from "react-query/hydration"

import { MapLayout } from "components/Layout"
import { ErddapPlatformList, BUOY_BARN_PLATFORMS_KEY, getPlatforms } from "Features/ERDDAP"
import { Region } from "Shared/regions"
import { regionList } from "Shared/constants"

const PlatformPage: React.FunctionComponent = () => {
  const { query } = useRouter()

  let region: Region | undefined

  if (query.region) {
    region = regionList.find((r) => r.slug === query.region)
  }

  return (
    <MapLayout
      pageName={region?.name}
      boundingBox={region?.bbox}
      rightCol={
        <React.Fragment>
          <h2>Platforms in {region ? region.name : ""}</h2>
          <ErddapPlatformList boundingBox={region?.bbox} />
        </React.Fragment>
      }
    >
      {null}
    </MapLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const queryCache = new QueryCache()

  await queryCache.prefetchQuery(BUOY_BARN_PLATFORMS_KEY, getPlatforms)

  return {
    props: {
      dehydratedState: dehydrate(queryCache),
    },
    revalidate: 10 * 60, // Every ten minutes
  }
}

export default PlatformPage
