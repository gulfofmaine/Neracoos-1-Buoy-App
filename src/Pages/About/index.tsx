import * as React from 'react'

import { DrupalBlock } from '@app/Features/Drupal'

export const AboutPage: React.StatelessComponent<{}> = () => {
    return (
        <div className="row">
            <div className="col">
                <h2>About</h2>
                <DrupalBlock node="node/26" />
            </div>
        </div>
    )
}

export default AboutPage
