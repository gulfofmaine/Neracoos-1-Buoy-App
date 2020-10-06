import { GetStaticPaths, GetStaticProps } from "next"
import React from "react"
import { QueryCache } from "react-query"
import { dehydrate } from "react-query/hydration"
import { Col, Row } from "reactstrap"

import { PlatformLayout } from "components/Layout"
import {
  ErddapCurrentPlatformConditions,
  BUOY_BARN_PLATFORMS_KEY,
  getPlatforms,
  BUOY_BARN_FORECAST_KEY,
  getForecasts,
} from "Features/ERDDAP"

const CurrentConditions: React.FunctionComponent = () => {
  return (
    <PlatformLayout>
      {({ platform }) => (
        <Row id="currentConditions">
          <Col>
            <ErddapCurrentPlatformConditions platform={platform} />
          </Col>
        </Row>
      )}
    </PlatformLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const queryCache = new QueryCache()

  await queryCache.prefetchQuery(BUOY_BARN_PLATFORMS_KEY, getPlatforms)
  await queryCache.prefetchQuery(BUOY_BARN_FORECAST_KEY, getForecasts)

  return {
    props: {
      dehydratedState: dehydrate(queryCache),
    },
    revalidate: 10 * 60, // Every ten minutes
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export default CurrentConditions
