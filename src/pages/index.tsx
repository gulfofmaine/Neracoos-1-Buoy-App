import { GetStaticProps } from "next"
import React from "react"
import { QueryCache } from "react-query"
import { dehydrate } from "react-query/hydration"

import { MapLayout } from "components/Layout"
import { Superlatives, BUOY_BARN_PLATFORMS_KEY, getPlatforms } from "Features/ERDDAP"
import { WagtailBlock, wagtailQueryKey, getWagtailPageById } from "Features/WagtailApi"

const WAGTAIL_PAGE_ID = "4"

const Index: React.FunctionComponent = () => (
  <MapLayout belowMap={<Superlatives />} rightCol={<WagtailBlock pageId={WAGTAIL_PAGE_ID} />}>
    {null}
  </MapLayout>
)

export const getStaticProps: GetStaticProps = async () => {
  const queryCache = new QueryCache()

  await queryCache.prefetchQuery(wagtailQueryKey(WAGTAIL_PAGE_ID), getWagtailPageById)
  await queryCache.prefetchQuery(BUOY_BARN_PLATFORMS_KEY, getPlatforms)

  return {
    props: {
      dehydratedState: dehydrate(queryCache),
    },
    revalidate: 10 * 60, // Every ten minutes
  }
}

export default Index
