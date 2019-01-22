import { configure } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import { GlobalWithFetchMock } from 'jest-fetch-mock'
import fetchMock = require('jest-fetch-mock')

configure({ adapter: new Adapter() })

const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock
customGlobal.fetch = fetchMock
customGlobal.fetchMock = customGlobal.fetch