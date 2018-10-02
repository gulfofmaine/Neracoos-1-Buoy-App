import * as React from 'react'
import { connect } from 'react-redux'
import {
    Col,
    Row
} from 'reactstrap'

import { SmallWindTimeSeriesChart } from '@app/components/Charts'
import { StoreState } from '@app/constants'
// import { DataTimeSeries } from '@app/Shared/timeSeries'

import { Platform } from '../types'

interface Props {
    platformId: string
}

interface ReduxProps {
    platforms: Platform[]
}

function mapStateToProps({platformData }: StoreState) {
    return {
        platforms: platformData.platforms
    }
}

export class ObservedPlatformWindConditionsBase extends React.Component<Props & ReduxProps, object> {
    public render() {
        const filteredPlatforms = this.props.platforms.filter((p) => p.id === this.props.platformId)

        if (filteredPlatforms.length > 0) {
            const platform = filteredPlatforms[0]

            const windTimeSeries = platform.data_types.filter((d) => d.data_type.includes('wind') && !d.data_type.includes('waves')).map(
                (type) => ({
                    name: type.data_type,
                    timeSeries: type.data,
                    unit: type.unit
                })
            )

            return (
                <Row>
                    <Col>
                        <h4>Wind</h4>
                        <SmallWindTimeSeriesChart
                            days={7}
                            data={windTimeSeries}
                            readingPerBarb={24}
                            />
                    </Col>
                </Row>

            )
        } else {
            return (
                <Row>
                    <Col>
                        Unable to display wind info.
                    </Col>
                </Row>
            )
            
        }
    }
}

export const ObservedPlatformWindConditions = connect(mapStateToProps)(ObservedPlatformWindConditionsBase)
