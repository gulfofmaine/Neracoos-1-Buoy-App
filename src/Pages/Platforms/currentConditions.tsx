import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { CurrentPlatformConditions } from '@app/Features/PlatformData'

import { PlatformMatchParams } from './types'

/**
 * Display current conditions for selected platform.
 */
export class CurrentConditionsPage extends React.Component<RouteComponentProps, object> {
    public render() {

        const { id } = this.props.match.params as PlatformMatchParams

        return (
            <div>
                <CurrentPlatformConditions platformId={id} />
            </div>
        )
    }
}
