import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview"
import type { Preview } from "@storybook/react"
import { setProjectAnnotations } from "@storybook/nextjs-vite"
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
const screenshotAnnotations: Preview = {
  afterEach: async ({ canvasElement, parameters, id }) => {
    if (!parameters.screenshot) {
      return
    }

    // Wait for Highcharts to have drawn something before capturing
    await expect.poll(() => canvasElement.querySelector(".highcharts-container svg .highcharts-series")).toBeTruthy()

    // Let Highcharts' series entry animations (clip/fade-in) finish. They are driven by timers, and
    // a blank first frame can otherwise be captured as "stable".
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // toMatchScreenshot retries until the image is stable, which lets chart animations settle
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
