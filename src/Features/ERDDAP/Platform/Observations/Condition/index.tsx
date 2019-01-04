import * as React from "react"
import { Col, Row } from "reactstrap"

import { LargeTimeSeriesChart } from "@app/components/Charts"
import { naturalBounds } from "@app/Shared/dataTypes"

import { PlatformFeatureWithDatasets } from "../../../types"
import { ErddapDatasetFinder, ErddapDatasetLoader } from "../../Dataset"

interface Props {
  platform: PlatformFeatureWithDatasets
  standardName: string
}

export const ErddapObservedCondition: React.SFC<Props> = ({ platform, standardName }) => (
  <ErddapDatasetFinder platform={platform} standardName={standardName}>
    {({ datasets }) => {
      datasets.sort((a, b) => a.depth - b.depth)

      const charts = datasets.map((d, index) => {
        const depth = d.depth > 0 ? " at " + d.depth + "m below" : ""

        const bounds = naturalBounds(d.data_type.standard_name)

        return (
          <Row key={index}>
            <Col>
              <h4>
                {d.data_type.long_name} {depth}
              </h4>
              <LargeTimeSeriesChart
                timeSeries={d.readings}
                unit={d.data_type.units}
                name={d.data_type.long_name}
                softMin={bounds[0]}
                softMax={bounds[1]}
              />
            </Col>
          </Row>
        )
      })

      return (
        <ErddapDatasetLoader platformId={platform.id as string} datasets={datasets}>
          <React.Fragment>{charts}</React.Fragment>
        </ErddapDatasetLoader>
      )
    }}
  </ErddapDatasetFinder>
)
