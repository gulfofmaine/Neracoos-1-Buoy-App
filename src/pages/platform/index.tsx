import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import React from "react"
import { QueryCache } from "react-query"
import { dehydrate } from "react-query/hydration"
import { Col, Row } from "reactstrap"

import { BaseLayout } from "components/Layout"
import {
  // ErddapMap,
  ErddapPlatformList,
} from "Features/ERDDAP"
import { Region } from "Shared/regions"
import { regionList } from "Shared/constants"

const PlatformPage: React.FunctionComponent = () => {
  const { query } = useRouter()

  let region: Region | undefined

  if (query.region) {
    region = regionList.find((r) => r.slug === query.region)
  }

  return (
    <BaseLayout>
      <Row>
        <Col sm={6}>Map here</Col>

        <Col sm={6}>
          <h2>Platforms in {region ? region.name : ""}</h2>
          <ErddapPlatformList boundingBox={region?.bbox} />
        </Col>
      </Row>
    </BaseLayout>
  )
}

export default PlatformPage
