import { test, expect } from "@playwright/test"

const platformUrl = "/platform/M01"

test.describe("Platfrom M01", () => {
  test("Can get to from Home Page", async ({ page }) => {
    await page.goto("/")
    await page.getByRole("link", { name: "Regions" }).click()
    await page.getByRole("link", { name: "Gulf Of Maine", exact: true }).click()
    await expect(await page.getByRole("heading", { name: "Platforms in Gulf Of Maine" })).toBeVisible()
    await page.getByRole("link", { name: "M01" }).click()
    await expect(await page.getByText("Station M01")).toBeVisible()
  })

  test("Will get redirected", async ({ page }) => {
    await page.goto("/platform/M01%20-%2044037")
    await expect(page).toHaveURL(/\/undefined/)
  })

  test("Shows platform status", async ({ page }) => {
    await page.goto(platformUrl)
    await expect(page.getByText(/Lat:/).first()).toBeVisible()
    await expect(page.getByText(/Lon:/).first()).toBeVisible()
    await expect(page.getByText(/Last updated at:/).first()).toBeVisible()
  })

  test.skip("Shows current conditions", async ({ page }) => {
    await page.goto(platformUrl)
    await expect(page.getByText(/Latest Conditions/).first()).toBeVisible()
    await expect(page.getByText(/Air Temperature -/).first()).toBeVisible()
    await expect(page.locator("[style='margin-top: 1rem;'] > :nth-child(2) .card").count()).toBeGreaterThan(3)
  })

  test("Shows air temp plot", async ({ page }) => {
    await page.goto(platformUrl)
    await page
      .getByText(/Air Temperature:/)
      .first()
      .click()
    await expect(
      page
        .locator("h4")
        .getByText(/Air Temperature/)
        .first(),
    ).toBeVisible()
  })

  test.skip("Shows wind plot", async ({ page }) => {
    await page.goto(platformUrl)
    await page
      .getByText(/Observations/)
      .first()
      .click()
    await page.locator('[href="/platform/M01/observations/wind"]').first().click()
    await expect(page.locator("h4").getByText(/Wind/).first()).toBeVisible()
    await expect(page.locator("svg.highcharts-root")).toBeVisible()
    await page.locator("svg.highcharts-root").getByText(/Gust/).first().click()
    await page.locator("svg.highcharts-root").getByText(/Speed/).first().click()
    await page
      .locator("svg.highcharts-root")
      .getByText(/Direction/)
      .first()
      .click()
    await expect(page.locator("svg.highcharts-root").getByText(/Knots/).first()).toBeVisible()
  })

  test("Shows wave forecast", async ({ page }) => {
    await page.goto(platformUrl)
    await page.locator("#forecast").click()
    await page.locator("[href='/platform/M01/forecast/significant_wave_height']").click()
    await expect(
      page
        .locator("h4")
        .getByText(/Significant Wave Height Forecast/)
        .first(),
    ).toBeVisible()
    await expect(page.locator("svg.highcharts-root").getByText(/Feet/).first()).toBeVisible()
    await page
      .getByText(/Metric/)
      .first()
      .click()
    await expect(
      page
        .locator("svg.highcharts-root")
        .getByText(/Meters/)
        .first(),
    ).toBeVisible()
    await page
      .getByText(/English/)
      .first()
      .click()
    await expect(page.locator("svg.highcharts-root").getByText(/Feet/).first()).toBeVisible()
    await page
      .getByText(/Significant Wave Height - observations/)
      .first()
      .click()

    // await page.locator('svg.highcharts-root').getByText(/Bedford Institute Wave Model - Height/).click()
    // await page.locator('svg.highcharts-root').getByText('Northeast Coastal Ocean Forecast System').click()
  })

  test("Has More info menu", async ({ page }) => {
    await page.goto(platformUrl)
    await page
      .getByText(/More info/)
      .first()
      .click()
    await expect(
      page
        .getByText(/More info/)
        .first()
        .locator("..")
        .locator(":scope > *")
        .last()
        .locator(":scope > *"),
    ).toHaveCount(2)
    await expect(page.getByText(/Marine Forecast/).first()).toBeVisible()
    await expect(page.getByText(/Tides/).first()).toBeVisible()
  })

  test("Updated recently", async ({ page }) => {
    await page.goto(platformUrl)
    await page
      .getByText(/Observations/)
      .first()
      .click()
    await page
      .getByText(/All Observations/)
      .first()
      .click()
    const element = page.locator("li", { has: page.locator('text="Last updated at:"') }).first()
    const text = await element.textContent()

    const year = new Date().getFullYear()

    let dateText = text!.split("Last updated at: ")[1] + ` ${year}`
    const date = new Date(dateText)

    const threeDaysAgo = new Date()
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3)
    expect(date.valueOf()).toBeGreaterThan(threeDaysAgo.valueOf())
  })

  test("Can view all observations", async ({ page }) => {
    await page.goto(platformUrl)
    await page
      .getByText(/Observations/)
      .first()
      .click()
    await page
      .getByText(/All Observations/)
      .first()
      .click()
    await expect(page.getByText(/Sigma-T @ 1m/).first()).toBeVisible()
  })
})
