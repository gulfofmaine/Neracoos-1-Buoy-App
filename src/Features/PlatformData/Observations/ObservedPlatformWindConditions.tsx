/**
 * Special Wind Observed Conditions Component
 */
import * as React from 'react'
import { connect } from 'react-redux'
import sizeMe, { SizeMeProps } from 'react-sizeme'
import {
    Col,
    Row
} from 'reactstrap'

import { WindTimeSeriesChart } from '@app/components/Charts'
import { StoreState } from '@app/constants'

import { Platform } from '../types'


interface Props {
    /** Platform ID to show wind data for */
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


/**
 * Wind observed conditions component
 */
export class ObservedPlatformWindConditionsBase extends React.Component<Props & ReduxProps & SizeMeProps, object> {
    public render() {

        // adjust number of barbs based on width
        let barbsPerDay = 5
        if (this.props.size.width < 800) {
            barbsPerDay = 2
        }

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
                        <WindTimeSeriesChart
                            days={7}
                            data={windTimeSeries}
                            barbsPerDay={barbsPerDay}
                            legend={true}
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

/** Redux connected ObservedPlatformWindConditions component. See [[ObservedPlatformWindConditionsBase]] component. */
export const ObservedPlatformWindConditions = sizeMe()(connect(mapStateToProps)(ObservedPlatformWindConditionsBase))
