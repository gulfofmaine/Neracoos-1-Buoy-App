import * as React from "react"

import { ErddapForecastMap, ErddapPlatformsLoader } from "Features/ERDDAP"

/**
 * Basic map page.
 * In the future this will be extended to allow filtering platforms based on different types of sensor data.
 */
export const RadarMapPage: React.StatelessComponent<{}> = () => {
  return (
    <div className="row">
      <div className="col">
        <ErddapPlatformsLoader>
          <ErddapForecastMap platformId="" />
        </ErddapPlatformsLoader>
      </div>
    </div>
  )
}

export default RadarMapPage
