import { expect, test } from "@playwright/test"

const platformUrl = "/water-level/sensor/Scituate%20Harbor/3%20days%20ago/datum_mhhw_meters"

test.describe("Sensor station at Scituate Harbor", () => {
  test("Can get to from Home Page", async ({ page }) => {
    await page.goto("/")
    await page.getByRole("link", { name: "Water Level" }).click()
    await page.getByRole("link", { name: "Scituate Harbor" }).click()
    await expect(await page.getByText(/Station Scituate Harbor/)).toBeVisible()
  })

  test("Shows plaform status and real time information", async ({ page }) => {
    await page.goto(platformUrl)
    await expect(page.getByText(/Lat:/).first()).toBeVisible()
    await expect(page.getByText(/Lon:/).first()).toBeVisible()
    await expect(page.getByText(/Last updated at:/).first()).toBeVisible()
  })

  test("Shows map of water level sensors", async ({ page }) => {
    await page.goto(platformUrl)
    await expect(page.locator("div.map").first()).toBeVisible()
  })

  test("Shows station selector", async ({ page }) => {
    await page.goto(platformUrl)
    await expect(await page.getByRole("button", { name: "Scituate Harbor" })).toBeVisible()
  })

  test("Shows platform waterlevel graph", async ({ page }) => {
    await page.goto(platformUrl)
    await expect(page.locator("svg.highcharts-root").getByText(/Feet/).first()).toBeVisible()
  })

  test("Selects sensor from station selector", async ({ page }) => {
    await page.goto(platformUrl)
    await page.getByRole("button", { name: "Scituate Harbor" }).click()
    await expect(await page.getByRole("menuitem", { name: "Hampton Harbor" })).toBeVisible()
    await page.getByRole("menuitem", { name: "Hampton Harbor" }).click()
    await expect(await page.getByText(/Station Hampton Harbor/)).toBeVisible()
    await expect(await page.url()).toContain("/water-level/sensor/Hampton%20Harbor")
  })
})
