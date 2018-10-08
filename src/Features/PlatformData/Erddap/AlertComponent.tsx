import * as React from 'react'
import { Alert } from 'reactstrap'

import { 
    DatasetData,
    ErddapDatasetAndField
} from '../types'

interface Props {
    dataset: DatasetData
    platformId: string
    clearError: (platformId: string, dataset: ErddapDatasetAndField) => void
}

export class LoadingAlert extends React.Component<Props, object> {
    constructor(props: Props) {
        super(props)

        this.toggle = this.toggle.bind(this)
    } 

    public render() {
        return (
            <Alert toggle={this.toggle} color="warning">{this.props.dataset.error_message}</Alert>
        )
    }

    private toggle() {
        this.props.clearError(this.props.platformId, this.props.dataset.dataset)
    }
}
