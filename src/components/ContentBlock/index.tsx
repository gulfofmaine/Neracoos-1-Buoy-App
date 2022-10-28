import React from "react"

export interface Props {
  /** HTML content to be rendered as a string */
  content: string
}

/**
 * Component to render HTML content
 */
export const ContentBlock = ({ content }: Props) => <div dangerouslySetInnerHTML={{ __html: content }} />

export default ContentBlock
