import * as React from "react"
import { Col, Row } from "reactstrap"

import { LargeTimeSeriesChart } from "components/Charts"
import { naturalBounds } from "Shared/dataTypes"
import { UnitSystem } from "Features/Units/types"

import { PlatformFeatureWithDatasets, PlatformDataset } from "../../../types"
import { ErddapDatasetFinder, ErddapDatasetLoader } from "../../Dataset"

interface Props {
  platform: PlatformFeatureWithDatasets
  standardName: string
  unit_system: UnitSystem
}

export const ErddapObservedCondition: React.SFC<Props> = props => (
  <ErddapDatasetFinder platform={props.platform} standardName={props.standardName}>
    {({ datasets }) => (
      <ErddapDatasetLoader platformId={props.platform.id as string} datasets={datasets}>
        <ObservedConditionsDatasets {...props} datasets={datasets} />
      </ErddapDatasetLoader>
    )}
  </ErddapDatasetFinder>
)

interface ObservedConditionsDatasetsProps extends Props {
  datasets: PlatformDataset[]
}

export const ObservedConditionsDatasets: React.SFC<ObservedConditionsDatasetsProps> = ({
  datasets,
  platform,
  unit_system,
  standardName
}) => {
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
            name={d.data_type.long_name}
            softMin={bounds[0]}
            softMax={bounds[1]}
            unit_system={unit_system}
            data_type={standardName}
          />
        </Col>
      </Row>
    )
  })

  return <React.Fragment>{charts}</React.Fragment>
}
