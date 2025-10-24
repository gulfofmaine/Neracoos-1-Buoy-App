import { test as base, expect } from "@playwright/test"
import extendPlaywrightPerformance, {
  PerformanceOptions,
  PerformanceWorker,
  PlaywrightPerformance,
} from "playwright-performance"

const test = base.extend<PlaywrightPerformance, PerformanceOptions & PerformanceWorker>(extendPlaywrightPerformance())

// test("Startup perfomrance", async ({page, performance}) => {
//     performance.sampleStart("GH-startup")
//     await page.goto("http://github.com")
//     performance.sampleEnd("GH-startup")
// })

test("Home speed", async ({ page, performance }) => {
  performance.sampleStart("Home-startup")
  performance.sampleStart("Home-Content")
  performance.sampleStart("Home-Platforms")
  await page.goto("/")
  // await page.goto("https://mariners-dev.aws.neracoos.org")
  await expect(await page.getByText("Home").first()).toBeVisible()
  performance.sampleEnd("Home-startup")
  await expect(await page.getByText("Welcome to the NERACOOS Mariners").first()).toBeVisible()
  performance.sampleEnd("Home-Content")
  await expect(await page.getByText("Latest Conditions").first()).toBeVisible()
  performance.sampleEnd("Home-Platforms")
})

test("Platform speed", async ({ page, performance }) => {
  performance.sampleStart("Platform-startup")
  await page.goto("/platform/44007")
  await expect(await page.getByText("Home").first()).toBeVisible()
  performance.sampleEnd("Platform-startup")
})

test("Navigate speed", async ({ page, performance }) => {
  performance.sampleStart("Navigate-Startup")
  await page.goto("/")
  await expect(await page.getByText("Home").first()).toBeVisible()
  performance.sampleEnd("Navigate-Startup")

  performance.sampleStart("Navigate-Regions")
  await page.getByRole("button", { name: "Regions" }).click()
  await page.getByRole("link", { name: "Gulf Of Maine", exact: true }).click()
  await expect(await page.getByRole("heading", { name: "Platforms in Gulf Of Maine" })).toBeVisible()
  performance.sampleEnd("Navigate-Regions")

  performance.sampleStart("Navigate-Platform")
  await page.getByRole("link", { name: "44007" }).click()
  await expect(await page.getByText("Station 44007")).toBeVisible()
  performance.sampleEnd("Navigate-Platform")
})
