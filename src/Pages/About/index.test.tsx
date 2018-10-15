import { shallow } from 'enzyme'
import * as React from 'react'

import AboutPage from '.'

it('renders without crashing', () => {
    shallow(<AboutPage />)
})
