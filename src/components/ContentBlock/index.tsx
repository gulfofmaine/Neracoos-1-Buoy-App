import * as React from 'react'


export interface Props {
    /** HTML content to be rendered as a string */
    content: string
}

/**
 * Component to render HTML content
 */
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
