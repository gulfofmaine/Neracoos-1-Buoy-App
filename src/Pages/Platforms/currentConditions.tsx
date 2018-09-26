import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

export class CurrentConditionsPage extends React.Component<RouteComponentProps, object> {
    public render() {
        // tslint:disable-next-line:no-console
        console.log(this.props)
        return (
            <div>
                Current conditions here
            </div>
        )
    }
}
