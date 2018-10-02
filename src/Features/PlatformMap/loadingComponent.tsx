import { Feature } from '@turf/helpers'
import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { StoreState } from '@app/constants'

import { platformLocationsLoad } from './actions'

export interface ReduxProps {
    loadPlatforms: () => void
    platforms:  Feature[]
}

function mapStateToProps({ platformMap }: StoreState) {
    return {
        platforms: platformMap.platforms
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    loadPlatforms: platformLocationsLoad
}, dispatch)

class PlatformMapLoaderBase extends React.Component<ReduxProps, object> {
    public render() {
        if (this.props.platforms.length  > 0) {
            return (
                this.props.children
            )
        } else {
            this.props.loadPlatforms()

            return (
                <div>
                    Loading information about platforms.
                </div>
            )
        }
    }
}

export const PlatformMapLoader = connect(mapStateToProps, mapDispatchToProps)(PlatformMapLoaderBase)
