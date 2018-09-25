import * as React from 'react'

export interface Props {
    content: string
}

export default class ContentBlock extends React.Component<Props, object> {
    public createHTML() {
        return {__html: this.props.content}
    }

    public render() {
        return (
            <div dangerouslySetInnerHTML={this.createHTML()} />
        )
    }
}
