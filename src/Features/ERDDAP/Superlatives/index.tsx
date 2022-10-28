/**
 * Superlatives, or what platforms experiencing the most extreme conditions right now
 */
import * as React from "react"
// import { Link } from "react-router-dom"
// import { Card, CardBody, CardHeader, Col, Row } from "reactstrap"

import { useUnitSystem } from "Features/Units"
import { converter } from "Features/Units/Converter"
import { UnitSystem } from "Features/Units/types"
import { paths } from "Shared/constants"
import { round } from "Shared/math"
import { anHourAgoRounded } from "Shared/time"
import { urlPartReplacer } from "Shared/urlParams"

// import { UsePlatforms } from "../hooks"
import { PlatformFeature, PlatformTimeSeries } from "../types"
import { conditions } from "../utils/conditions"

const waveHeight = new Set(conditions.waveHeight)
const windSpeed = new Set(conditions.windSpeed)

/**
 * Superlatives, or what platforms experiencing the most extreme conditions right now
 */
// export const Superlatives: React.FunctionComponent = () => {
//   const unitSystem = useUnitSystem()

//   const lastHour = anHourAgoRounded()

//   return (
//     <UsePlatforms>
//       {({ platforms }) => <ShowSuperlatives laterThan={lastHour} {...{ platforms, unitSystem }} />}
//     </UsePlatforms>
//   )
// }

interface ShowSuperlativesProps {
  platforms: PlatformFeature[]
  unitSystem: UnitSystem
  laterThan: Date
}

/**
 * Show the highest winds and biggest waves for selected platforms
 *
 * Only shows if both wind and wave data is available
 *
 * @param platforms A selection of PlatformFeatures
 * @param unitSystem unit system to display with
 * @param laterThan a date to make sure all the readings are more recent then
 */
// export const ShowSuperlatives: React.FunctionComponent<ShowSuperlativesProps> = ({
//   platforms,
//   unitSystem,
//   laterThan,
// }) => {
//   const { platform: windPlatform, timeSeries: windTimeSeries } = findHighestCondition(platforms, laterThan, windSpeed)
//   const { platform: wavePlatform, timeSeries: waveTimeSeries } = findHighestCondition(platforms, laterThan, waveHeight)

//   if (windPlatform && windTimeSeries && wavePlatform && waveTimeSeries) {
//     return (
//       <Card style={{ marginTop: "1rem", marginBottom: "1rem" }}>
//         <CardHeader>
//           <h5>Latest Conditions</h5>
//         </CardHeader>

//         <CardBody>
//           <Row>
//             <Col>
//               <HighestConditions
//                 title="Highest Winds"
//                 platform={windPlatform}
//                 timeSeries={windTimeSeries}
//                 unitSystem={unitSystem}
//               />
//             </Col>

//             <Col>
//               <HighestConditions
//                 title="Biggest Waves"
//                 platform={wavePlatform}
//                 timeSeries={waveTimeSeries}
//                 unitSystem={unitSystem}
//               />
//             </Col>
//           </Row>
//         </CardBody>
//       </Card>
//     )
//   }

//   return null
// }

/**
 * Filter down and find the most extreme values from the selected set of standard names
 *
 * @param platforms Platforms to search through
 * @param laterThan Time window to make sure found timeSeries are before
 * @param compareSet Set of standard names to include in search
 */
export function findHighestCondition(
  platforms: PlatformFeature[],
  laterThan: Date,
  compareSet: Set<string>
): { platform?: PlatformFeature; timeSeries?: PlatformTimeSeries } {
  let highestPlatform: PlatformFeature | undefined = undefined
  let highestTimeSeries: PlatformTimeSeries | undefined = undefined

  platforms.forEach((platform) => {
    platform.properties.readings.forEach((reading) => {
      if (compareSet.has(reading.data_type.standard_name) && reading.value) {
        if (reading.time ? laterThan < new Date(reading.time) : false) {
          if (highestTimeSeries ? (highestTimeSeries.value ? highestTimeSeries.value < reading.value : true) : true) {
            highestTimeSeries = reading
            highestPlatform = platform
          }
        }
      }
    })
  })

  return {
    platform: highestPlatform,
    timeSeries: highestTimeSeries,
  }
}

interface HighestConditionsProps {
  title: string
  platform: PlatformFeature
  timeSeries: PlatformTimeSeries
  unitSystem: UnitSystem
}

// /**
//  * Display a summary of a platform's condition
//  *
//  * @param platform to display
//  * @param timeSeries Time series of interest
//  * @param unitSystem Unit system to display values in
//  * @param title Title to display
//  */
// const HighestConditions: React.FunctionComponent<HighestConditionsProps> = ({
//   platform,
//   timeSeries,
//   unitSystem,
//   title,
// }) => {
//   const dataConverter = converter(timeSeries.data_type.standard_name)

//   const url = urlPartReplacer(paths.platforms.platform, ":id", platform.id as string)

//   return (
//     <React.Fragment>
//       <Link to={url}>
//         <h6>{title}</h6>
//       </Link>
//       <div>
//         {round(dataConverter.convertToNumber(timeSeries.value!, unitSystem), 1)} {dataConverter.displayName(unitSystem)}
//       </div>
//       <Link to={url}>
//         <div>
//           {platform.id} - {platform.properties.mooring_site_desc}
//         </div>
//       </Link>
//     </React.Fragment>
//   )
// }
