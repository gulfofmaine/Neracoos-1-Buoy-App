/**
 * Collection of cards to display a summary of
 * current conditions that a platform is experiencing.
 */
import * as React from "react"
import { Row } from "reactstrap"

import { PlatformFeature } from "../../../types"

import { conditions } from "./conditions"
import { DataCard } from "./data_card"
import { WindCard } from "./wind"

interface Props {
  platform: PlatformFeature
}

/**
 * Collection of cards to display a summary of the current conditions that a platform is experiencing.
 *
 * @param platform Platform to display data for
 */
export const ErddapCurrentPlatformConditions: React.FunctionComponent<Props> = ({ platform }) => (
  <Row>
    <WindCard platform={platform} />

    <DataCard platform={platform} data_types={conditions.airTemp} />
    <DataCard platform={platform} data_types={conditions.airPressure} />
    <DataCard platform={platform} data_types={conditions.waveHeight} />
    <DataCard platform={platform} data_types={conditions.wavePeriod} />
    <DataCard platform={platform} data_types={conditions.waveDirection} />
    <DataCard platform={platform} data_types={conditions.waterTemp} />
    <DataCard platform={platform} data_types={conditions.visibility} />
  </Row>
)
