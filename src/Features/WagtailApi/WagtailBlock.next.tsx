import React from "react"

import ContentBlock from "components/ContentBlock"

import { fetchPageById } from "./fetch"

export interface Props {
  /** Wagtail API page number to load */
  pageId: string
}

/**
 * Show content from Wagtail
 *
 * @param pageId string identifier of page to load from Wagtail
 */
export async function WagtailBlock({ pageId }) {
  const data = await fetchPageById(pageId)

  return <ContentBlock content={data.body} />
}
