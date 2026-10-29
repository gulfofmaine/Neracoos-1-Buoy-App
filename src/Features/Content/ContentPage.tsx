import * as React from "react"

import ContentBlock from "components/ContentBlock"

import { ContentName, fetchContent } from "./fetch"

export interface Props {
  /** Name of content to load */
  name: ContentName
}

/**
 * Show HTML content loaded from GitHub (or the bundled fallback)
 *
 * @param name Name of content to load
 */
export async function ContentPage({ name }: Props) {
  const content = await fetchContent(name)

  return <ContentBlock content={content} />
}
