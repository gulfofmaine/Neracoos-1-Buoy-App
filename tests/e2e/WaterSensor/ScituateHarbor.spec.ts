import { expect, test } from "@playwright/test"

const platformUrl = "/water-level/sensor/Scituate%20Harbor"
const sensorId = "Scituate Harbor"

test.describe("Sensor station at Scituate Harbor", () => {
  test("Can get to from Home Page", async ({ page }) => {
    await page.goto("/")
    await page.getByRole("link", { name: "Water Level" })
    await page.getByRole("link", { name: "Scituate Harbor" })
    await expect(await page.getByRole("heading", { name: `Station ${sensorId}` }))
  })
})
