import * as React from 'react'
import { connect } from 'react-redux'
import {
    bindActionCreators,
    Dispatch
} from 'redux'

import { StoreState } from '@app/constants'

import { platformDataLoad } from './actions'
import { Platform, Status } from './types'

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

export class PlatformLoaderBase extends React.Component<Props & ReduxProps, object> {
    constructor(props: Props & ReduxProps) {
        super(props)
    }

    public render() {
        const filteredPlatforms = this.props.platforms.filter((p) => p.id === this.props.platformId)

        if (filteredPlatforms.length > 0) {
            const platform = filteredPlatforms[0]

            if (platform.status !== Status.Loaded) {
                return (
                    <div>
                        Loading platform {this.props.platformId}.
                    </div>
                )
            } else { 
                return (
                    this.props.children
                )
            }
        } else {
            this.props.loadPlatform(this.props.platformId)

            return (
                <div>
                    Loading platform {this.props.platformId}.
                </div>
            )
        }
    }
}

export const PlatformLoader = connect(mapStateToProps, mapDispatchToProps)(PlatformLoaderBase)
