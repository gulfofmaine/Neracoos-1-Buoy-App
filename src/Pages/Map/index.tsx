import * as React from "react"

import { ErddapMap, ErddapPlatformsLoader } from "Features/ERDDAP"

/**
 * Basic map page.
 * In the future this will be extended to allow filtering platforms based on different types of sensor data.
 */
export const MapPage: React.StatelessComponent<{}> = () => {
  return (
    <div className="row">
      <div className="col">
        <h2>Map</h2>
        <ErddapPlatformsLoader>
          <ErddapMap platformId="" />
        </ErddapPlatformsLoader>
      </div>
    </div>
  )
}

export default MapPage
