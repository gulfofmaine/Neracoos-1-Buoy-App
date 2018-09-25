import * as React from 'react'

import { PlatformMap } from '@app/Features/PlatformMap'

export const MapPage: React.StatelessComponent<{}> = () => {
    return (
        <div className="row">
            <div className="col">
                <h2>Map</h2>
                <PlatformMap />
            </div>
        </div>
    )
}

export default MapPage
