import { test, expect } from "@playwright/test"

test.describe("About Page", () => {
  test("Can visit About Page from Home Page", async ({ page }) => {
    await page.goto("/")
    await page.getByText(/About/).first().click()
    await expect(page.getByText(/Platform data provided by/).first()).toBeVisible()
  })

  test("Loads Wagtail Content", async ({ page }) => {
    await page.goto("/about/")
    await expect(page.getByText(/Platform data provided by:/).first()).toBeVisible()
  })
})
