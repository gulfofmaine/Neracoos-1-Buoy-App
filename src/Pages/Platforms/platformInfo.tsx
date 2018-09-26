import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

export class PlatformInfo extends React.Component<RouteComponentProps, object> {
    constructor(props: RouteComponentProps) {
        super(props)
    }

    public render() {
        return (
            <div>Info about selected platform</div>
        )
    }
}