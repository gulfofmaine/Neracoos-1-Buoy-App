import * as React from 'react'

import { ForecastMap, PlatformMapLoader } from '@app/Features/PlatformMap'

/**
 * Basic map page.
 * In the future this will be extended to allow filtering platforms based on different types of sensor data.
 */
export const RadarMapPage: React.StatelessComponent<{}> = () => {
    return (
        <div className="row">
            <div className="col">
                <h2>Map</h2>
                <PlatformMapLoader>
                    <ForecastMap platformId='' />
                </PlatformMapLoader>
            </div>
        </div>
    )
}

export default RadarMapPage
