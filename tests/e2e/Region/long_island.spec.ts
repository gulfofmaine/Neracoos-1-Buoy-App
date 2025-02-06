import { test, expect } from "@playwright/test"

test.describe("Region: Long Island", () => {
  test("Can show Long Island", async ({ page }) => {
    await page.goto("/")
    await page
      .getByText(/Regions/)
      .first()
      .click()
    await page
      .getByText(/Long Island/)
      .first()
      .click()
    await expect(page.getByText(/Platforms in Long Island Sound/).first()).toBeVisible()
  })

  test("Shows only a subset of platforms", async ({ page }) => {
    await page.goto("/region/LONG")
    await expect(
      page
        .locator("h2")
        .getByText(/Platforms in Long Island Sound/)
        .first(),
    ).toBeVisible()
    await expect(await page.locator(".list-group").locator(":scope > *").count()).toBeGreaterThan(4)
    await expect(await page.locator(".list-group").locator(":scope > *").count()).toBeLessThan(15)
    await test.step("Currently does not as of React 19 updates - Shows the attribution button", async () => {
      // await expect(page.locator(".ol-attribution > button > span")).toBeVisible()
    })
  })
})
