import { currentConditionsTimeseries } from "./currentConditionsTimeseries"
import { platform } from "../../../stories/platform"

describe("currentConditionsTimeseries", () => {
    const laterThan = new Date("2020-02-03")

    it("Finds wind timeseries", () => {
        const { windTimeSeries } = currentConditionsTimeseries(platform, laterThan)
        const windTimeSeriesVariables = windTimeSeries.map((ts) => ts.variable)

        expect(windTimeSeriesVariables).toStrictEqual(["wind_speed", "wind_gust", "wind_direction"])
    })

    it("Finds timeseries that should go before normal selection", () => {
        const { before } = currentConditionsTimeseries(platform, laterThan)
        const beforeVariables = before.map((ts) => ts.variable)

        expect(beforeVariables).toStrictEqual(["significant_wave_height_3", "air_temperature"])
    })

    it("Finds timeseries that should go after normal selection", () => {
        const { after } = currentConditionsTimeseries(platform, laterThan)
        const afterVariables = after.map((ts) => ts.variable)

        expect(afterVariables).toStrictEqual(["temperature", "dominant_wave_period_3"])
    })

    it("Normal selection should not include highlighted variables", () => {
        const { timeSeries } = currentConditionsTimeseries(platform, laterThan)
        const timeSeriesVariables = timeSeries.map((ts) => ts.variable)

        expect(timeSeriesVariables).not.toContain("temperature")
        expect(timeSeriesVariables).not.toContain("air_temperature")
    })

    it("A group of normal variables should be selected", () => {
        const {timeSeries } = currentConditionsTimeseries(platform, laterThan)
        const timeSeriesVariables = timeSeries.map((ts) => ts.variable)

        expect(timeSeriesVariables).toStrictEqual(["barometric_pressure", "visibility"])
    })
})
