import * as React from 'react'
import { connect } from 'react-redux'
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Row
} from 'reactstrap'
import { bindActionCreators, Dispatch } from 'redux'

import { 
    SmallTimeSeriesChart,
    // SparkLineChart 
} from '@app/components/Charts'
import { StoreState } from '@app/constants'

import { platformDataLoad } from '../actions'
import { Platform } from '../types'

interface Props {
    platformId: string
}

interface ReduxProps {
    platforms: Platform[]
    loadPlatform: (platformId: string) => void
}

function mapStateToProps({ platformData }: StoreState) {
    return {
        platforms: platformData.platforms
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    loadPlatform: platformDataLoad
}, dispatch)

export class CurrentPlatformConditionsBase extends React.Component<Props & ReduxProps, object> {
    constructor(props: Props & ReduxProps) {
        super(props)
    }

    public render() {
        const filteredPlatforms = this.props.platforms.filter((p) => p.id === this.props.platformId)

        if (filteredPlatforms.length > 0) {
            const platform = filteredPlatforms[0]

            // const dataTypes = platform.data_types.map((type, index) =>
            //     <p key={index}>{type.data_type} - { type.depth }</p>
            // )
            const dataTypes = platform.data_types.map((type, index) => {
                // <SparkLineChart key={index} name={type.data_type} timeSeries={type.data} />
                let depth: string
                if (type.depth === 0) {
                    depth = 'At surface'
                } else if (type.depth > 0) {
                    depth = type.depth + 'm below surface'
                } else {
                    depth = -type.depth + 'm above surface'
                }
                return (
                    <Col key={index} md="4" style={{paddingTop: '1rem'}}>
                        <Card >
                            <CardHeader>{type.data_type + ' - ' + depth}</CardHeader>
                            <CardBody>
                                <SmallTimeSeriesChart 
                                    name={type.data_type} 
                                    timeSeries={type.data}
                                    unit={type.unit} />
                            </CardBody>
                        </Card>
                    </Col>
                )
            })

            return (
                <Row>
                    { dataTypes }
                </Row>
            )
        } else {
            this.props.loadPlatform(this.props.platformId)

            return (
                <div>Loading platform</div>
            )
        }
    }
}

export const CurrentPlatformConditions = connect(mapStateToProps, mapDispatchToProps)(CurrentPlatformConditionsBase)
