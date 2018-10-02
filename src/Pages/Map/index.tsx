import * as React from 'react'

import { PlatformMap, PlatformMapLoader } from '@app/Features/PlatformMap'

export const MapPage: React.StatelessComponent<{}> = () => {
    return (
        <div className="row">
            <div className="col">
                <h2>Map</h2>
                <PlatformMapLoader>
                    <PlatformMap />
                </PlatformMapLoader>
            </div>
        </div>
    )
}

export default MapPage
