/**
 * ERDDAP loading alert component
 */
import * as React from 'react'
import { Alert } from 'reactstrap'

import { 
    DatasetData,
    ErddapDatasetAndField
} from '../types'


interface Props {
    /** Dataset that is trying to be loaded */
    dataset: DatasetData
    /** Platform that needs the dataset */
    platformId: string
    /** Clear error message */
    clearError: (platformId: string, dataset: ErddapDatasetAndField) => void
}


/**
 * ERDDAP loading error component.
 */
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

    /** Clear error message */
    private toggle() {
        this.props.clearError(this.props.platformId, this.props.dataset.dataset)
    }
}
