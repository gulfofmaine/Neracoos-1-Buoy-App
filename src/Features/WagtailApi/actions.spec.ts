import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"

import { wagtailError, wagtailLoadContent, wagtailSuccess } from "./actions"
import * as types from "./actionTypes"

describe("Wagtail actions", () => {
  it("Wagtail error should contain a pageId", () => {
    const pageId = "4"
    const expectedAction = {
      pageId,
      type: types.WAGTAIL_LOAD_ERROR
    }

    const result = wagtailError(pageId)

    expect(result).toEqual(expectedAction)
  })

  it("Wagtail success should contain pageId and content", () => {
    const content = {
      body: "ABC<br />123"
    }
    const pageId = "4"

    const expectedAction = {
      content,
      pageId,
      type: types.WAGTAIL_LOAD_SUCCESS
    }

    const result = wagtailSuccess(pageId, content)

    expect(result).toEqual(expectedAction)
  })
})

// tslint:disable:object-literal-sort-keys
const wagtailResponseJson = {
  id: 5,
  meta: {
    type: "home.HomePage",
    detail_url: "http://localhost/api/pages/5/",
    html_url: "http://localhost/mariners-about/",
    slug: "mariners-about",
    show_in_menus: false,
    seo_title: "",
    search_description: "",
    first_published_at: "2019-05-02T17:22:34.560943Z",
    parent: {
      id: 3,
      meta: {
        type: "home.HomePage",
        detail_url: "http://localhost/api/pages/3/",
        html_url: "http://localhost/"
      },
      title: "Home"
    }
  },
  title: "Mariners - About",
  body: "Content for Mariners Dashboard About Page"
}

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("Wagtail should be able to fetch a node and call the reducer with the relevant info", () => {
  afterEach(() => {
    fetch.resetMocks()
  })

  it("Creates a successful action when fetching is complete", () => {
    fetch.mockResponseOnce(JSON.stringify(wagtailResponseJson))

    const store = mockStore({ pages: [] })

    store.dispatch(wagtailLoadContent("5")).then(() => {
      const actions = store.getActions()

      expect(actions.length).toEqual(1)

      const successAction = actions[0]

      expect(successAction.content.body).toEqual(wagtailResponseJson.body)
    })

    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch.mock.calls[0][0]).toContain("/api/pages/5/?format=json")
  })
})
