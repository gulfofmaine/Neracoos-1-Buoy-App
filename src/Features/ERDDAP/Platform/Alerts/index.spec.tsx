import { render } from "enzyme"
import * as React from "react"

import { PlatformAlert } from "../../types"

import { PlatformAlerts } from "./index"

describe("PlatformAlerts", () => {
  it("Will not render alerts when there are none", () => {
    const platform = {
      id: "N01",
      properties: {
        alerts: []
      }
    }

    const wrapper = render(<PlatformAlerts platform={platform} />)

    expect(wrapper.text()).toEqual("")
  })

  it("Can render multiple alerts", () => {
    const alert1: PlatformAlert = {
      end_time: "2019-05-15",
      level: "WARNING",
      message: "N01 has slipped it's anchor",
      start_time: "2018-12-15"
    }
    const alert2: PlatformAlert = {
      level: "INFO",
      message: "Some testing is being done",
      start_time: "2019-01-05"
    }

    const platform = {
      id: "N01",
      properties: {
        alerts: [alert1, alert2]
      }
    }

    const wrapper = render(<PlatformAlerts platform={platform} />)

    expect(wrapper.text()).toContain(alert1.message)
    expect(wrapper.text()).toContain(alert2.message)
  })
})
