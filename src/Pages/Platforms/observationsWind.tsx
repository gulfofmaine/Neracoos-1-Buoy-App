import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { ObservedPlatformWindConditions } from '@app/Features/PlatformData'

import { PlatformMatchParams } from './types'

/**
 * Specialty Wind observation page.
 */
export class WindObservationsPage extends React.Component<RouteComponentProps, object> {
    public render() {
        const { id } = this.props.match.params as PlatformMatchParams

        return (
            <ObservedPlatformWindConditions platformId={id} />
        )
    }
}
