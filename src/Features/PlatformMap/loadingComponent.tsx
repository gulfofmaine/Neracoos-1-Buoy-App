import { Feature } from '@turf/helpers'
import * as React from 'react'
import { connect } from 'react-redux'
import {
    Alert,
    Col,
    Row
} from 'reactstrap'
import { 
    bindActionCreators, 
    Dispatch 
} from 'redux'

import { StoreState } from '@app/constants'

import { platformLocationsLoad } from './actions'

export interface ReduxProps {
    loadPlatforms: () => void
    platforms:  Feature[]
    errorMessage: string
}

function mapStateToProps({ platformMap }: StoreState) {
    return {
        errorMessage: platformMap.errorMessage,
        platforms: platformMap.platforms
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    loadPlatforms: platformLocationsLoad
}, dispatch)

class PlatformMapLoaderBase extends React.Component<ReduxProps, object> {
    constructor(props: ReduxProps) {
        super(props)

        this.retry = this.retry.bind(this)
    }

    public render() {
        if (this.props.platforms.length  > 0) {
            return (
                this.props.children
            )
        } else if (this.props.errorMessage.length > 0) {
            return (
                <Row>
                    <Col>
                        <Alert color="warning" toggle={this.retry} >
                            <h4>{ this.props.errorMessage }</h4>
                        </Alert>
                    </Col>
                </Row>
            )
        } else {
            this.props.loadPlatforms()

            return (
                <Row>
                    <Col>
                        <Alert color="primary">
                            Loading information about platforms.
                        </Alert>
                    </Col>
                </Row>
            )
        }
    }

    private retry() {
        this.props.loadPlatforms()
    }
}

export const PlatformMapLoader = connect(mapStateToProps, mapDispatchToProps)(PlatformMapLoaderBase)
