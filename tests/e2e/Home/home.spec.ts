import { test, expect } from "@playwright/test"

test.describe("Home page", function () {
  test("Loads Drupal content", async function ({ page }) {
    await page.goto("/")
    await expect(
      await page
        .getByText(
          /Welcome to the NERACOOS Mariners' Dashboard, which delivers high-quality, timely data from a growing network of buoys and sensors into the hands of mariners heading to sea\./,
        )
        .first(),
    ).toBeVisible()
  })

  test("Has a nav bar", async ({ page }) => {
    await page.goto("/")
    await expect(await page.locator(".navbar-brand")).toBeVisible()
    await expect(page.getByText(/Regions/).first()).toBeVisible()
    await expect(page.getByText(/About/).first()).toBeVisible()
  })

  test("Has a footer", async ({ page }) => {
    await page.goto("/")
    await expect(
      await page
        .locator(".footer")
        .getByText(/Copyright/)
        .first()
        .getByText(/NERACOOS/)
        .first(),
    ).toBeVisible()
    await expect(
      page
        .locator(".footer")
        .getByText(/Product of NERACOOS\.org - Developed and maintained by the Gulf of Maine Research Institute/)
        .first(),
    ).toBeVisible()
  })

  test("Has superlatives", async ({ page }) => {
    await page.goto("/")
    await expect(await page.getByText(/Highest Winds/).first()).toBeVisible()
    await expect(page.getByText(/Knots/).first()).toBeVisible()
    await expect(page.getByText(/Biggest Waves/).first()).toBeVisible()
    await expect(page.getByText(/Feet/).first()).toBeVisible()
  })
})
