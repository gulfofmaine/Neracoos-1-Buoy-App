import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { StoreState } from '@app/constants'

import { platformDataLoad } from './actions'
import { Platform } from './types'

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

            const dataTypes = platform.data_types.map((type, index) =>
                <p key={index}>{type.data_type} - { type.depth }</p>
            )

            return (
                <div>Found platform:
                    { dataTypes }
                </div>
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
