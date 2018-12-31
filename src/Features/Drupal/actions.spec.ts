import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"

import { drupalError, drupalLoadContent, drupalSuccess } from "./actions"
import * as types from "./actionTypes"

describe("Drupal actions", () => {
  it("Drupal Error should contain node", () => {
    const node = "26"
    const expectedAction = {
      node,
      type: types.DRUPAL_LOAD_ERROR
    }

    const result = drupalError(node)

    expect(result).toEqual(expectedAction)
  })

  it("Drupal Success should contain node and content", () => {
    const content = {
      format: "HTML",
      safe_summary: "Hi",
      safe_value: "Hi",
      summary: "<b>Hi</b>",
      value: "<b>Hi</b>"
    }
    const node = "26"

    const expectedAction = {
      content,
      node,
      type: types.DRUPAL_LOAD_SUCCESS
    }

    const result = drupalSuccess(node, content)

    expect(result).toEqual(expectedAction)
  })
})

const drupalNode = "node/27"
const drupalResponseJson = {
  vid: "33",
  uid: "2",
  title: "Mariners Dashboard Home",
  log: "",
  status: "1",
  comment: "1",
  promote: "0",
  sticky: "0",
  nid: "27",
  type: "page",
  language: "und",
  created: "1539366326",
  changed: "1539630470",
  tnid: "0",
  translate: "0",
  revision_timestamp: "1539630470",
  revision_uid: "2",
  body: {
    und: [
      {
        value:
          "<H4>Mariner's Dashboard</H4>\r\n<p />\r\nWelcome to the NERACOOS Mariner's Dashboard. This application has been designed to provide access to the latest weather data and forecasts from the region. \r\n<p />\r\nTo get started, select a station from the map the view the current weather conditions and get access to forecast data and additional data from the station. \r\n<p />\r\nThis application is still in development, but we'd love your <a href=\"mailto:info@neracoos.org\">feedback!</a>",
        summary: "",
        format: "full_html",
        safe_value:
          "<p></p><h4>Mariner's Dashboard</h4>\n<p></p>\nWelcome to the NERACOOS Mariner's Dashboard. This application has been designed to provide access to the latest weather data and forecasts from the region. \n<p></p>\nTo get started, select a station from the map the view the current weather conditions and get access to forecast data and additional data from the station. \n<p></p>\nThis application is still in development, but we'd love your <a href=\"mailto:info@neracoos.org\">feedback!</a>\n",
        safe_summary: ""
      }
    ]
  },
  field_image: [],
  rdf_mapping: {
    rdftype: ["foaf:Document"],
    title: { predicates: ["dc:title"] },
    created: { predicates: ["dc:date", "dc:created"], datatype: "xsd:dateTime", callback: "date_iso8601" },
    changed: { predicates: ["dc:modified"], datatype: "xsd:dateTime", callback: "date_iso8601" },
    body: { predicates: ["content:encoded"] },
    uid: { predicates: ["sioc:has_creator"], type: "rel" },
    name: { predicates: ["foaf:name"] },
    comment_count: { predicates: ["sioc:num_replies"], datatype: "xsd:integer" },
    last_activity: { predicates: ["sioc:last_activity_date"], datatype: "xsd:dateTime", callback: "date_iso8601" }
  },
  cid: "0",
  last_comment_timestamp: "1539366326",
  last_comment_name: null,
  last_comment_uid: "2",
  comment_count: "0",
  name: "riley",
  picture: "0",
  data: 'a:1:{s:7:"overlay";i:1;}',
  path: "http://content.gmri.org/node/27"
}

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("Drupal should be able to fetch a node and call our reducer with the relevant info", () => {
  afterEach(() => {
    fetch.resetMocks()
  })

  it("Creates success action when fetching is complete", () => {
    fetch.mockResponseOnce(JSON.stringify(drupalResponseJson))

    const store = mockStore({ nodes: [] })

    return store.dispatch(drupalLoadContent(drupalNode)).then(() => {
      const actions = store.getActions()

      expect(actions.length).toEqual(1)

      const successAction = actions[0]

      expect(successAction.content.format).toEqual("full_html")
      expect(successAction.content.value.includes("Mariner")).toEqual(true)
    })

    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch.mock.calls[0][0]).toEqual("http://localhost:3000/api/node/27.json")
  })
})
