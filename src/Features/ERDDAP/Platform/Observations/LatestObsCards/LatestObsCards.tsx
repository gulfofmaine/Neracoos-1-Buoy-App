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
import { getLatestObsGroups } from "./latestObs"

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
  const { allCurrentConditionsTimeseries } = currentConditionsTimeseries(platform, laterThan)
  const times = allCurrentConditionsTimeseries.filter((d) => d.time !== null).map((d) => new Date(d.time as string))
  times.sort((a, b) => a.valueOf() - b.valueOf())
  const { waveTs, windTs, otherTs } = getLatestObsGroups(allCurrentConditionsTimeseries)
  // console.log(otherTs)
  return (
    <>
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
      <Row xs={1} lg={2} className="align-items-stretch">
        {waveTs.length > 0 && <LatestObsCard timeSeries={waveTs} platform={platform} unitSystem={unitSystem} />}
        {windTs.length > 0 && <LatestObsCard timeSeries={windTs} platform={platform} unitSystem={unitSystem} />}
        {otherTs.map((ts, index) => {
          return <LatestObsCard key={index} timeSeries={ts} platform={platform} unitSystem={unitSystem} />
        })}
      </Row>

      {unitSelector ? (
        <Row className="mt-4 w-100 align-items-center justify-content-center">
          <Col className="order-1" xs={12} lg={4}>
            <span className="d-flex justify-content-center text-black-65">Unit system</span>
          </Col>
          <Col className="order-2" xs={12} lg={8}>
            {unitSelector}
          </Col>
        </Row>
      ) : null}
      {children && <>{children}</>}
    </>
  )
}
