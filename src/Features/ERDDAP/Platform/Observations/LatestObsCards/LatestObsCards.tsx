/**
 * Current observations table component
 */
import React from "react"
import { Row, Col } from "react-bootstrap"
import { UnitSystem } from "Features/Units/types"

import { UsePlatformRenderProps } from "../../../hooks/BuoyBarnComponents"
import { currentConditionsTimeseries } from "../../../utils/currentConditionsTimeseries"

import { LatestObsCard } from "./LatestObsCard"
import { platformName } from "Features/ERDDAP/utils/platformName"

interface Props extends UsePlatformRenderProps {
  unitSelector?: React.ReactNode
  unitSystem: UnitSystem
  laterThan: Date
  children?: any
}

/**
 * Recent platform observation values
 * @param platform
 */
export const ErddapObservationCards: React.FC<Props> = ({
  platform,
  unitSelector,
  unitSystem,
  laterThan,
  children,
}: Props) => {
  const { windTimeSeries, waveTimeSeries, allNonGroupedTimeseries } = currentConditionsTimeseries(platform, laterThan)

  const times = allNonGroupedTimeseries.filter((d) => d.time !== null).map((d) => new Date(d.time as string))
  times.sort((a, b) => a.valueOf() - b.valueOf())
  return (
    <div className="d-flex flex-column bg-black bg-opacity-5 rounded-3 p-2">
      <h3>Latest Conditions</h3>
      {times.length > 0 ? (
        <span className="d-flex flex-row">
          <p className="text-black-65 pe-1">Last updated</p>
          <b>
            {times[times.length - 1].toLocaleString(undefined, {
              hour: "2-digit",
              hour12: true,
              minute: "2-digit",
              month: "short",
              day: "numeric",
            })}
          </b>
        </span>
      ) : (
        <div>There is no recent data from {platformName(platform)}</div>
      )}
      <Row xs={1} lg={3} className="g-1">
        {allNonGroupedTimeseries.map((ts, index) => {
          return <LatestObsCard key={index} timeSeries={ts} platform={platform} unitSystem={unitSystem} />
        })}
        {waveTimeSeries.length > 0 && (
          <LatestObsCard timeSeries={waveTimeSeries} platform={platform} unitSystem={unitSystem} />
        )}
        {windTimeSeries.length > 0 && (
          <LatestObsCard timeSeries={windTimeSeries} platform={platform} unitSystem={unitSystem} />
        )}
      </Row>

      {unitSelector ? (
        <div className="d-flex mt-4 gap-3 align-items-center justify-content-center justify-content-md-start">
          <span className="d-flex text-nowrap justify-content-center text-black-65">Unit system</span>
          {unitSelector}
        </div>
      ) : null}
      {children && <>{children}</>}
    </div>
  )
}
