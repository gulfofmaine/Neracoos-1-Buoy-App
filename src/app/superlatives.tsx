import React from "react"
import Link from "next/link"

import { Card, CardBody, CardHeader } from "components/Bootstrap/card"
import { Col, Row } from "components/Bootstrap/layout"
import { PlatformFeature, PlatformTimeSeries } from "Features/ERDDAP/types"
import { findHighestCondition } from "Features/ERDDAP/Superlatives"
import { conditions } from "Features/ERDDAP/utils/conditions"
import { converter } from "Features/Units/Converter"
import { UnitSystem } from "Features/Units/types"
import { urlPartReplacer } from "Shared/urlParams"
import { paths } from "Shared/constants"
import { round } from "Shared/math"
import { anHourAgoRounded } from "Shared/time"

import { getPlatforms } from "./buoyBarn"

const waveHeight = new Set(conditions.waveHeight)
const windSpeed = new Set(conditions.windSpeed)

export async function Superlatives() {
  const platforms = await getPlatforms()
  const lastHour = anHourAgoRounded()

  const { platform: windPlatform, timeSeries: windTimeSeries } = findHighestCondition(platforms, lastHour, windSpeed)
  const { platform: wavePlatform, timeSeries: waveTimeSeries } = findHighestCondition(platforms, lastHour, waveHeight)

  const unitSystem = UnitSystem.english

  return (
    <Card style={{ marginTop: "1rem", marginBottom: "1rem" }}>
      <CardHeader>
        <h5>Latest Conditions</h5>
      </CardHeader>

      <CardBody>
        <Row>
          <Col md={6}>
            <HighestConditions
              title="Highest winds"
              platform={windPlatform}
              timeSeries={windTimeSeries}
              unitSystem={unitSystem}
            />
          </Col>

          <Col md={6}>
            <HighestConditions
              title="Biggest Waves"
              platform={wavePlatform}
              timeSeries={waveTimeSeries}
              unitSystem={unitSystem}
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

interface HighestConditionsProps {
  title: string
  platform: PlatformFeature
  timeSeries: PlatformTimeSeries
  unitSystem: UnitSystem
}

const HighestConditions = ({ platform, timeSeries, unitSystem, title }: HighestConditionsProps) => {
  const dataConverter = converter(timeSeries.data_type.standard_name)
  const url = urlPartReplacer(paths.platforms.platform, ":id", platform.id as string)

  return (
    <React.Fragment>
      <Link href={url}>
        <h6>{title}</h6>
      </Link>
      <div>
        {round(dataConverter.convertToNumber(timeSeries.value!, unitSystem), 1)} {dataConverter.displayName(unitSystem)}
      </div>
      <Link href={url}>
        <div>
          {platform.id} - {platform.properties.mooring_site_desc}
        </div>
      </Link>
    </React.Fragment>
  )
}
