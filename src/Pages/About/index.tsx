import * as React from "react"

import { WagtailBlock } from "Features/WagtailApi"

/**
 * The about page displays content from the drupal content server.
 */
export const AboutPage: React.StatelessComponent<{}> = () => {
  return (
    <div className="row">
      <div className="col">
        <WagtailBlock pageId="5" />
      </div>
    </div>
  )
}

export default AboutPage
