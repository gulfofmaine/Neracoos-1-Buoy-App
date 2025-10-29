// import fetchMock, { GlobalWithFetchMock } from "jest-fetch-mock"
import "@testing-library/jest-dom/vitest"
import { afterEach } from "vitest"
import { cleanup } from "@testing-library/react"

afterEach(() => {
  cleanup()
})

// const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock
// customGlobal.fetch = fetchMock
// customGlobal.fetchMock = customGlobal.fetch
