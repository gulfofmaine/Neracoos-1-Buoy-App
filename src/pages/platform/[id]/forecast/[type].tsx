import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import React from "react"
import { QueryClient } from "react-query"
import { dehydrate } from "react-query/hydration"
import { Col, Row } from "reactstrap"

import { PlatformLayout } from "components/Layout"
import {
  Forecast as ErddapForecast,
  BUOY_BARN_PLATFORMS_KEY,
  getPlatforms,
  BUOY_BARN_FORECAST_KEY,
  getForecasts,
} from "Features/ERDDAP"
import { useUnitSystem } from "Features/Units"

const Forecast: React.FC = () => {
  const { query } = useRouter()
  const unitSystem = useUnitSystem()

  const forecastType = query.type as string

  return (
    <PlatformLayout>
      {({ platform }) => (
        <Row style={{ marginTop: "1rem" }}>
          <Col>
            <ErddapForecast platform={platform} forecast_type={forecastType} unitSystem={unitSystem} />
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
  return {
    paths: [],
    fallback: true,
  }
}

export default Forecast
