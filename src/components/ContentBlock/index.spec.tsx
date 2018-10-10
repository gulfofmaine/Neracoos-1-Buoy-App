import * as React from 'react'
import * as ReactDOM from 'react-dom'

import ContentBlock from '.'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ContentBlock content='<h2>Hello</h2>' />
    , div)
})