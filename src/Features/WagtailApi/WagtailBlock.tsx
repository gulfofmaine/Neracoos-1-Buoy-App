import * as React from "react"
import { Alert } from "reactstrap"

import ContentBlock from "components/ContentBlock"

import { usePage } from "./hooks"

export interface Props {
  /** Wagtail API page number to load */
  pageId: string
}

export const WagtailBlock: React.FunctionComponent<Props> = ({ pageId }) => {
  const { isLoading, data } = usePage(pageId)

  if (isLoading) {
    return <Alert color="primary">Loading content...</Alert>
  }

  if (data) {
    return <ContentBlock content={data.body} />
  }

  return <Alert color="error">Error loading content</Alert>
}
