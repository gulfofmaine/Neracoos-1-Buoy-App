import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { ObservationTable } from '@app/Features/PlatformData/CurrentConditions'
import { PlatformInfoPanel } from '@app/Features/PlatformMap'

import { PlatformMatchParams } from './types'

/**
 * Display our platform info panel for the select platform.
 */
export class PlatformInfo extends React.Component<RouteComponentProps, object> {
    constructor(props: RouteComponentProps) {
        super(props)
    }

    public render() {
        const { id } = this.props.match.params as PlatformMatchParams

        return (
            <div>
                <PlatformInfoPanel platformId={id} />
                <ObservationTable platformId={id} />
            </div>
        )
    }
}