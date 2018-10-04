import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { ForecastPlatformConditions } from '@app/Features/PlatformData'

import { PlatformMatchParams } from './types'

export class ForecastsPage extends React.Component<RouteComponentProps, object> {
    public render() {

        const { id } = this.props.match.params as PlatformMatchParams

        return (
            <ForecastPlatformConditions platformId={id} />
        )
    }
}
