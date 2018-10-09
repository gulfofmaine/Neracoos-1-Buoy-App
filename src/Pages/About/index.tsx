import * as React from 'react'

import { DrupalBlock } from '@app/Features/Drupal'

export const AboutPage: React.StatelessComponent<{}> = () => {
    return (
        <div className="row">
            <div className="col">
                <DrupalBlock node="node/26" />
            </div>
        </div>
    )
}

export default AboutPage
