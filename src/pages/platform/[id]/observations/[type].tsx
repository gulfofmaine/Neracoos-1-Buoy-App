import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import React from "react"
import { QueryCache } from "react-query"
import { dehydrate } from "react-query/hydration"
import { Col, Row } from "reactstrap"

import { PlatformLayout } from "components/Layout"
import { ErddapObservedCondition, BUOY_BARN_PLATFORMS_KEY, getPlatforms } from "Features/ERDDAP"

const ObservedCondition: React.FC = () => {
  const { query } = useRouter()

  const standardName = query.type as string

  return (
    <PlatformLayout>
      {({ platform }) => (
        <Row style={{ marginTop: "1rem" }}>
          <Col>
            <ErddapObservedCondition platform={platform} standardName={standardName} />
          </Col>
        </Row>
      )}
    </PlatformLayout>
  )
}

export default ObservedCondition
