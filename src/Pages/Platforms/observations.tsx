import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { ObservedPlatformConditions } from '@app/Features/PlatformData'

import { PlatformObservationMatchParams } from './types'

/**
 * Generalized observation page.
 */
export class ObservationsPage extends React.Component<RouteComponentProps, object> {
    public render() {

        const { id, type } = this.props.match.params as PlatformObservationMatchParams

        return (
            <ObservedPlatformConditions platformId={id} type={type}/>
        )
    }
}