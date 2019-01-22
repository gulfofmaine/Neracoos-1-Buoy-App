import { mount } from "enzyme"
import * as React from "react"

import { ForecastSource } from "../../types"

import { ForecastMetataLoaderBase, ReduxProps } from "./index"

function setup(loading: boolean, forecasts: ForecastSource[], errorMessage?: string) {
  const props: ReduxProps = {
    errorMessage,
    forecasts,
    loadForecastMetadata: jest.fn(),
    loading
  }

  const enzymeWrapper = mount(
    <ForecastMetataLoaderBase {...props}>
      <p>Hello</p>
    </ForecastMetataLoaderBase>
  )

  return {
    enzymeWrapper,
    props
  }
}

describe("ForecastMetadataLoaderBase", () => {
  it("should attempt to load when mounted", () => {
    const { enzymeWrapper, props } = setup(false, [])

    expect(enzymeWrapper.find("a.nav-link").text()).toEqual("Forecasts starting to load")

    expect(props.loadForecastMetadata).toBeCalled()
    expect(props.loadForecastMetadata.mock.calls.length).toBe(1)
  })

  it("Should show that its loading when mounted", () => {
    const { enzymeWrapper, props } = setup(true, [])

    expect(enzymeWrapper.find("a.nav-link").text()).toEqual("Forecasts loading")

    expect(props.loadForecastMetadata).not.toBeCalled()
  })

  it("Should show that there is an error loading", () => {
    const { enzymeWrapper, props } = setup(false, [], "Error")

    expect(enzymeWrapper.find("a.nav-link").text()).toEqual("Forecasts not avaliable")

    expect(props.loadForecastMetadata).not.toBeCalled()
  })

  it("Should show child when forecasts are loaded", () => {
    const { enzymeWrapper, props } = setup(false, testForecasts)

    expect(enzymeWrapper.text()).toEqual("Hello")

    expect(props.loadForecastMetadata).not.toBeCalled()
  })
})

const testForecasts: ForecastSource[] = [
  {
    description: "Wave Direction from the Bedford Institute Wave Model",
    forecast_type: "Wave Direction",
    name: "Bedford Institute Wave Model - Direction",
    point_forecast: "/api/forecasts/bedford_ww3_wave_direction/",
    slug: "bedford_ww3_wave_direction",
    source_url: "http://www.neracoos.org/erddap/griddap/WW3_72_GulfOfMaine_latest.html"
  },
  {
    description: "Wave Height from the Bedford Institute Wave Model",
    forecast_type: "Wave Height",
    name: "Bedford Institute Wave Model - Height",
    point_forecast: "/api/forecasts/bedford_ww3_wave_height/",
    slug: "bedford_ww3_wave_height",
    source_url: "http://www.neracoos.org/erddap/griddap/WW3_72_GulfOfMaine_latest.html"
  }
]
