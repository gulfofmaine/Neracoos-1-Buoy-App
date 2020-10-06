import { GetStaticPaths, GetStaticProps } from "next"
import React from "react"
import { QueryCache } from "react-query"
import { dehydrate } from "react-query/hydration"

import { PlatformLayout } from "components/Layout"
import { ErddapCurrentPlatformConditions, BUOY_BARN_PLATFORMS_KEY, getPlatforms } from "Features/ERDDAP"

const CurrentConditions: React.FunctionComponent = () => {
  return <PlatformLayout>{({ platform }) => <ErddapCurrentPlatformConditions platform={platform} />}</PlatformLayout>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const platforms = await getPlatforms()

  const paths = platforms.features.map((platform) => ({ params: { id: platform.id } }))

  return {
    paths,
    fallback: true,
  }
}

export default CurrentConditions
