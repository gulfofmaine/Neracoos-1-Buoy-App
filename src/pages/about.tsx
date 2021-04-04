import { GetStaticProps } from "next"
import React from "react"
import { QueryClient } from "react-query"
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
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(wagtailQueryKey(WAGTAIL_PAGE_ID), () => getWagtailPageById(WAGTAIL_PAGE_ID))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 1 * 60 * 60, // Once per hour
  }
}

export default About
