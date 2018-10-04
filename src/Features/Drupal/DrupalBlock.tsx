import * as React from 'react'
import { connect } from 'react-redux'
import { Alert } from 'reactstrap'
import { bindActionCreators, Dispatch } from 'redux'

import ContentBlock from '@app/components/ContentBlock'

import * as actions from './actions'

import { StoreState } from '@app/constants'
import { DrupalNode } from './constants';

export interface Props {
    node: string
}

export interface ReduxProps {
    loadNode: (node: string) => void,
    nodes: DrupalNode[]
}

function mapStateToProps({ drupal }: StoreState) {
    return {
        nodes: drupal.nodes
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    loadNode: actions.drupalLoadContent
}, dispatch)

export class DrupalBlockBase extends React.Component<Props & ReduxProps, object> {
    public render() {
        const filtered = this.props.nodes.filter(node => node.node === this.props.node)

        if (filtered.length < 1 ) {
            this.props.loadNode(this.props.node)
            return (
                <Alert color="primary">Loading content...</Alert>
            )
        } else {
            const node = filtered[0]
            return (
                <ContentBlock content={node.content.value} />
            )
        }
    }
}

export const DrupalBlock = connect(mapStateToProps, mapDispatchToProps )(DrupalBlockBase)
