import { test, expect } from "@playwright/test"

/*global cy*/

const platformUrl = "/platform/A01"

test.describe("Units", () => {
  test("Switching units updates units displayed", async ({ page }) => {
    await page.goto(platformUrl)
    await expect(page.getByText(/kts/).first()).toBeVisible()
    await expect(page.getByText(/\u00B0F/).first()).toBeVisible()
    // await expect(page.getByText(/Nautical Miles/).first()).toBeVisible()
    await expect(page.getByText(/m\/s/).first()).not.toBeVisible()
    await expect(page.getByText(/\u00B0C/).first()).not.toBeVisible()
    // await expect(page.getByText(/Kilometers/).first()).not.toBeVisible()
    await page
      .getByText(/Metric/)
      .first()
      .click()
    await expect(page.getByText(/kts/).first()).not.toBeVisible()
    await expect(page.getByText(/\u00B0F/).first()).not.toBeVisible()
    // await expect(page.getByText(/Nautical Miles/).first()).not.toBeVisible()
    await expect(page.getByText(/m\/s/).first()).toBeVisible()
    await expect(page.getByText(/\u00B0C/).first()).toBeVisible()
    // await expect(page.getByText(/Kilometers/).first()).toBeVisible()
    await page
      .getByText(/English/)
      .first()
      .click()
    await expect(page.getByText(/kts/).first()).toBeVisible()
    await expect(page.getByText(/\u00B0F/).first()).toBeVisible()
    // await expect(page.getByText(/Nautical Miles/).first()).toBeVisible()
    await expect(page.getByText(/m\/s/).first()).not.toBeVisible()
    await expect(page.getByText(/\u00B0C/).first()).not.toBeVisible()
    // await expect(page.getByText(/Kilometers/).first()).not.toBeVisible()
  })
})
