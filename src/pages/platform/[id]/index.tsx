import { GetStaticPaths, GetStaticProps } from "next"
import React from "react"
import { QueryClient } from "react-query"
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

const CurrentConditions: React.FC = () => {
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
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(BUOY_BARN_PLATFORMS_KEY, getPlatforms)
  await queryClient.prefetchQuery(BUOY_BARN_FORECAST_KEY, getForecasts)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 10 * 60, // Every ten minutes
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const platforms = await getPlatforms()

  return {
    paths: platforms.features.map((platform) => ({ params: { id: platform.id } })),
    fallback: true,
  }
}

export default CurrentConditions
