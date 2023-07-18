import fetchMock, { GlobalWithFetchMock } from "jest-fetch-mock"
import "@testing-library/jest-dom"

const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock
customGlobal.fetch = fetchMock
customGlobal.fetchMock = customGlobal.fetch
