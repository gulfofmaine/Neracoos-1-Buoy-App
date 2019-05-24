import Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import fetchMock, { GlobalWithFetchMock } from "jest-fetch-mock"

Enzyme.configure({ adapter: new Adapter() })

const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock
customGlobal.fetch = fetchMock
customGlobal.fetchMock = customGlobal.fetch
