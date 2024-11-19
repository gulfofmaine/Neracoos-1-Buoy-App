import { expect, test } from "@playwright/test"

/*global cy*/

const platformUrl = "/platform/A01"

test.describe("Platform A01", () => {
  test("Can get to from Home Page", async ({ page }) => {
    await page.goto("/")
    await page.getByRole("link", { name: "Regions" }).click()
    await page.getByRole("link", { name: "Gulf Of Maine", exact: true }).click()
    await expect(await page.getByRole("heading", { name: "Platforms in Gulf Of Maine" })).toBeVisible()
    await page.getByRole("link", { name: "A01", exact: true }).click()
    await expect(await page.getByText("Station A01")).toBeVisible()
  })

  test.skip("Will get redirected", async ({ page }) => {
    await page.goto("/platform/A01%20-%2044029")
    await expect(page).toHaveURL(/\/undefined/)
  })

  test("Shows platform status", async ({ page }) => {
    await page.goto(platformUrl)
    await expect(page.getByText(/Lat:/).first()).toBeVisible()
    await expect(page.getByText(/Lon:/).first()).toBeVisible()
    await expect(page.getByText(/Last updated at:/).first()).toBeVisible()
  })

  test("Shows current conditions", async ({ page }) => {
    await page.goto(platformUrl)
    await expect(page.getByText(/Latest Conditions/).first()).toBeVisible()
    await expect(page.getByText(/Air Temperature -/).first()).toBeVisible()

    await expect(page.getByText("Loading").first()).toBeHidden()

    const cards = await page.locator(".card")
    await expect(await cards.count()).toBeGreaterThan(4)
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
    await page.locator("#Tooltip-0").dispatchEvent("mouseout")
    await expect(page.getByText(/Data access/).first()).not.toBeVisible()
    await page.locator("#Tooltip-0").dispatchEvent("mouseover")
    await expect(page.getByText(/Data access/).first()).toBeVisible({ timeout: 20000 })
    await expect(page.getByText(/Data table/).first()).toBeVisible({ timeout: 20000 })
    await expect(page.getByText(/Download CSV/).first()).toBeVisible({ timeout: 20000 })
    await expect(page.getByText(/ERDDAP dataset/).first()).toBeVisible({ timeout: 20000 })
  })

  test("Shows wind plot", async ({ page }) => {
    await page.goto(platformUrl)
    await page
      .getByText(/Observations/)
      .first()
      .click()
    await page.getByRole("menuitem", { name: "Wind" }).first().click()
    await expect(page.getByRole("heading", { name: "Wind" }).first()).toBeVisible({ timeout: 10000 })
    await expect(page.locator("svg.highcharts-root")).toBeVisible()
    await page.locator("svg.highcharts-root").getByText(/Gust/).first().click()
    await page.locator("svg.highcharts-root").getByText(/Speed/).first().click()
    await page
      .locator("svg.highcharts-root")
      .getByText(/Direction/)
      .first()
      .click()
    await expect(page.locator("svg.highcharts-root").getByText(/Knots/).first()).toBeVisible()
    await expect(page.getByText(/Data access/).first()).not.toBeVisible()
    await page.locator("#Tooltip-0").dispatchEvent("mouseover")
    await expect(page.getByText(/Data access/).first()).toBeVisible()
    await expect(page.getByText(/Data table/).first()).toBeVisible()
    await expect(page.getByText(/Download CSV/).first()).toBeVisible()
    await expect(page.getByText(/ERDDAP dataset/).first()).toBeVisible()
  })

  test("Shows wave forecast", async ({ page }) => {
    await page.goto(platformUrl)
    await page.locator("#forecast").click()
    await page.locator("[href='/platform/A01/forecast/significant_wave_height']").click()
    await expect(
      page
        .locator("h4")
        .getByText(/Significant Wave Height Forecast/)
        .first()
        .or(page.getByText("No current forecast available")),
    ).toBeVisible()
    await expect(
      page.locator("svg.highcharts-root").getByText(/ft/).first().or(page.getByText("No current forecast available")),
    ).toBeVisible()
    await page
      .getByText(/Metric/)
      .first()
      .click()
    await expect(
      page
        .locator("svg.highcharts-root")
        .getByText(/Meters/)
        .first()
        .or(page.getByText("No current forecast available")),
    ).toBeVisible()
    await page
      .getByText(/English/)
      .first()
      .click()
    await expect(
      page.locator("svg.highcharts-root").getByText(/ft/).first().or(page.getByText("No current forecast available")),
    ).toBeVisible()
    if (await page.getByText(/Significant Wave Height - observations/).isVisible()) {
      await page
        .getByText(/Significant Wave Height - observations/)
        .first()
        .click()
    } else {
      await expect(page.getByText("No current forecast available")).toBeVisible()
    }

    // await page.locator('svg.highcharts-root').getByText(/Bedford Institute Wave Model - Height/).click()
    // await page.locator('svg.highcharts-root').getByText('Northeast Coastal Ocean Forecast System').click()
  })

  test("Has More info menu", async ({ page }) => {
    await page.goto(platformUrl)
    await page
      .getByText(/More info/)
      .first()
      .click()
    const menuItems = await page.getByRole(`menuitem`).all()
    await expect(menuItems.length).toBeGreaterThan(0)
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
    await expect(page.getByText(/Sigma-T/).first()).toBeVisible()
  })

  test("Can perisist observation view on hard refresh", async ({ page }) => {
    await page.goto(platformUrl)
    await page
      .getByText(/Observations/)
      .first()
      .click()
    await page
      .getByText(/Air Temperature/)
      .first()
      .click()
    await expect(
      page
        .locator("h4")
        .getByText(/Air Temperature/)
        .first(),
    ).toBeVisible()
    await expect(page.getByText(/Data access/).first()).not.toBeVisible()
    await page.locator("#Tooltip-0").dispatchEvent("mouseover")
    await expect(page.getByText(/Data access/).first()).toBeVisible()
    await expect(page.getByText(/Data table/).first()).toBeVisible()
    await expect(page.getByText(/Download CSV/).first()).toBeVisible()
    await expect(page.getByText(/ERDDAP dataset/).first()).toBeVisible()
    await page.reload()
    await expect(
      page
        .locator("h4")
        .getByText(/Air Temperature/)
        .first(),
    ).toBeVisible()
    await expect(page.getByText(/Data access/).first()).not.toBeVisible()
    await page.locator("#Tooltip-0").dispatchEvent("mouseover")
    await expect(page.getByText(/Data access/).first()).toBeVisible()
    await expect(page.getByText(/Data table/).first()).toBeVisible()
    await expect(page.getByText(/Download CSV/).first()).toBeVisible()
    await expect(page.getByText(/ERDDAP dataset/).first()).toBeVisible()
  })
})
