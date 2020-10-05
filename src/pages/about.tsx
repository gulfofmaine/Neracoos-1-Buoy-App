import { GetStaticProps } from "next"
import React from "react"
import { QueryCache } from "react-query"
import { dehydrate } from "react-query/hydration"
import { Col, Row } from "reactstrap"

import { BaseLayout } from "components/Layout"
import { WagtailBlock, wagtailQueryKey, getWagtailPageById } from "Features/WagtailApi"

const WAGTAIL_PAGE_ID = "5"

const About: React.FunctionComponent = () => (
  <BaseLayout pageName="About">
    <Row>
      <Col>
        <WagtailBlock pageId="5" />
      </Col>
    </Row>
  </BaseLayout>
)

export const getStaticProps: GetStaticProps = async () => {
  const queryCache = new QueryCache()

  await queryCache.prefetchQuery(wagtailQueryKey(WAGTAIL_PAGE_ID), getWagtailPageById)

  return {
    props: {
      dehydratedState: dehydrate(queryCache),
    },
    revalidate: 1 * 60 * 60, // Once per hour
  }
}

export default About
