import { shallow } from 'enzyme'
import * as React from 'react'
import App from './App'

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
  shallow(<App />)
})
