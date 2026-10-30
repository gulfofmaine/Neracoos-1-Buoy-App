import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview"
import type { Preview } from "@storybook/react"
import { setProjectAnnotations } from "@storybook/nextjs-vite"
import { getHighcharts } from "@highcharts/react"
import { expect } from "vitest"
import { page } from "vitest/browser"
import * as projectAnnotations from "./preview"

/**
 * Screenshot regression testing.
 *
 * Stories that set `parameters.screenshot = true` have their rendered canvas compared against a committed
 * baseline in `__screenshots__/` next to the story file once their play function has finished.
 * Only runs in Vitest (not the Storybook UI). Baselines are Linux specific, so regenerate them with
 * `make update-screenshots` (see Makefile).
 */
// Stories freeze the global Date (see freezeTime), but Highcharts' animation clock (Fx) reads Date, so entry
// animations and animated resizes (e.g. a chart's `height`) never progress and screenshots capture half-drawn
// charts. Disable animation so the first frame is the final frame. Set it on the Highcharts instance
// @highcharts/react renders with (the ES-module build), not the UMD `highcharts` import.
getHighcharts().setOptions({ chart: { animation: false }, plotOptions: { series: { animation: false } } })

const screenshotAnnotations: Preview = {
  afterEach: async ({ canvasElement, parameters, id }) => {
    if (!parameters.screenshot) {
      return
    }

    // Wait for Highcharts to have drawn something before capturing
    await expect.poll(() => canvasElement.querySelector(".highcharts-container svg .highcharts-series")).toBeTruthy()

    // toMatchScreenshot retries until the image is stable. Animations are disabled above, so the first
    // frame is the final one.
    await expect.element(page.elementLocator(canvasElement)).toMatchScreenshot(id, {
      comparatorName: "pixelmatch",
      comparatorOptions: {
        threshold: 0.1,
        allowedMismatchedPixelRatio: 0.001,
      },
    })
  },
}

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
setProjectAnnotations([a11yAddonAnnotations, projectAnnotations, screenshotAnnotations])
