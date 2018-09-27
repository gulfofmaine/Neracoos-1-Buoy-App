import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { PlatformInfoPanel } from '@app/Features/PlatformMap'

import { PlatformMatchParams } from './types'

export class PlatformInfo extends React.Component<RouteComponentProps, object> {
    constructor(props: RouteComponentProps) {
        super(props)
    }

    public render() {
        const { id } = this.props.match.params as PlatformMatchParams

        return (
            <PlatformInfoPanel platformId={id} />
        )
    }
}