import { test, expect } from "@playwright/test"

/*global cy*/

const platformUrl = "/platform/A01"

test.describe("Units", () => {
  test("Switching units updates units displayed", async ({ page }) => {
    await page.goto(platformUrl)
    await expect(page.getByText(/Knots/).first()).toBeVisible()
    await expect(page.getByText(/Fahrenheit/).first()).toBeVisible()
    // await expect(page.getByText(/Nautical Miles/).first()).toBeVisible()
    await expect(page.getByText(/Meters\/Second/).first()).not.toBeVisible()
    await expect(page.getByText(/Celsius/).first()).not.toBeVisible()
    // await expect(page.getByText(/Kilometers/).first()).not.toBeVisible()
    await page
      .getByText(/Metric/)
      .first()
      .click()
    await expect(page.getByText(/Knots/).first()).not.toBeVisible()
    await expect(page.getByText(/Fahrenheit/).first()).not.toBeVisible()
    // await expect(page.getByText(/Nautical Miles/).first()).not.toBeVisible()
    await expect(page.getByText(/Meters\/Second/).first()).toBeVisible()
    await expect(page.getByText(/Celsius/).first()).toBeVisible()
    // await expect(page.getByText(/Kilometers/).first()).toBeVisible()
    await page
      .getByText(/English/)
      .first()
      .click()
    await expect(page.getByText(/Knots/).first()).toBeVisible()
    await expect(page.getByText(/Fahrenheit/).first()).toBeVisible()
    // await expect(page.getByText(/Nautical Miles/).first()).toBeVisible()
    await expect(page.getByText(/Meters\/Second/).first()).not.toBeVisible()
    await expect(page.getByText(/Celsius/).first()).not.toBeVisible()
    // await expect(page.getByText(/Kilometers/).first()).not.toBeVisible()
  })
})
