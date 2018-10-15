import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'

import NavBar from '.'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>
        ,
        div
    )
})