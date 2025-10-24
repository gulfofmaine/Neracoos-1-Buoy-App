import { test, expect } from "@playwright/test"

/*global cy*/

test.describe("Mooring location regressions", () => {
  test("Finds the correct location for B01", async ({ page }) => {
    await page.goto("/platform/B01")
    await expect(
      page
        .locator(".card-title")
        .getByText(/Western Maine Shelf/)
        .first(),
    ).toBeVisible()
  })

  test("Finds the correct location for I01", async ({ page }) => {
    await page.goto("/platform/I01")
    await expect(
      page
        .locator(".card-title")
        .getByText(/Eastern Maine Shelf/)
        .first(),
    ).toBeVisible()
  })
})
