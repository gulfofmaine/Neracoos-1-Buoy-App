import { expect, test } from "@playwright/test"

test.describe("Platform redirects", () => {
  // Redirects for tide gauge signs https://github.com/gulfofmaine/Neracoos-1-Buoy-App/issues/3011
  test("Can redirect to platform page", async ({ page }) => {
    await page.goto("/s/port-clyde-tide-gauge")
    await expect(await page.getByText("Port Clyde Tide Gauge").first()).toBeVisible()
    await expect(await page.getByText("Last updated at:").first()).toBeVisible()
    await expect(page.url()).toBe("http://127.0.0.1:3000/platform/Port%20Clyde%20Tide%20Gauge")
  })
})
