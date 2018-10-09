/**
 * Platform data loading component
 */

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

import { 
    platformDataClearError,
    platformDataLoad,
 } from './actions'
import { Platform, Status } from './types'



interface Props {
    /** Platform ID to make sure the data is loaded for */
    platformId: string
}

interface ReduxProps {
    platforms: Platform[]
    loadPlatform: (platformId: string) => void
    clearError: (platformId: string) => void
}

function mapStateToProps({ platformData }: StoreState) {
    return {
        platforms: platformData.platforms
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    clearError: platformDataClearError,
    loadPlatform: platformDataLoad
}, dispatch)


/**
 * Platform data loading component.
 * Makes sure that the NERACOOS data is loaded before displaying children,
 * otherwise it will display any errors.
 */
export class PlatformLoaderBase extends React.Component<Props & ReduxProps, object> {
    constructor(props: Props & ReduxProps) {
        super(props)

        this.retry = this.retry.bind(this)
    }

    public render() {
        const filteredPlatforms = this.props.platforms.filter((p) => p.id === this.props.platformId)

        if (filteredPlatforms.length > 0) {
            const platform = filteredPlatforms[0]

            if (platform.error_message.length > 0) {
                return (
                    <Row>
                        <Col>
                            <Alert color="warning" toggle={this.retry} >
                                <h4>Unable to load platform data</h4>
                                <p>{platform.error_message}</p>
                            </Alert>
                        </Col>
                    </Row>
                )
            } else if (platform.status !== Status.Loaded) {
                return (
                    <Row>
                        <Col>
                            <Alert color="primary">
                                Loading platform {this.props.platformId}.
                            </Alert>
                        </Col>
                    </Row>
                )
            } else { 
                return (
                    this.props.children
                )
            }
        } else {
            this.props.loadPlatform(this.props.platformId)

            return (
                <Row>
                    <Col>
                        <Alert color="primary">
                            Loading platform {this.props.platformId}.
                        </Alert>
                    </Col>
                </Row>
            )
        }
    }

    /** Retry loading of platform data. */
    private retry() {
        this.props.clearError(this.props.platformId)
        this.props.loadPlatform(this.props.platformId)
    }
}

/** Redux connected PlatformLoader component. See [[PlatformLoaderBase]] for details. */
export const PlatformLoader = connect(mapStateToProps, mapDispatchToProps)(PlatformLoaderBase)
