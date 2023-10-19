import React from "react"

export interface Props {
  /** HTML content to be rendered as a string */
  content: string
}

/**
 * Component to render HTML content
 */
const ContentBlock = ({ content }: Props) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}

export default ContentBlock
