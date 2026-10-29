// @vitest-environment node
import { readFileSync } from "node:fs"
import path from "node:path"

import * as Sentry from "@sentry/nextjs"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { contentUrl, FETCH_TIMEOUT_MS, fetchContent } from "./fetch"

vi.mock("@sentry/nextjs", () => ({ captureException: vi.fn() }))

const bundled = (name: string) => readFileSync(path.join(process.cwd(), "content", `${name}.html`), "utf8")

describe("fetchContent", () => {
  const fetchMock = vi.fn()

  beforeEach(() => {
    vi.stubGlobal("fetch", fetchMock)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.clearAllMocks()
    vi.restoreAllMocks()
  })

  it("builds the GitHub raw url", () => {
    expect(contentUrl("about")).toBe(
      "https://raw.githubusercontent.com/gulfofmaine/Neracoos-1-Buoy-App/main/content/about.html",
    )
  })

  it("returns the remote body when the fetch succeeds", async () => {
    fetchMock.mockResolvedValue(new Response("<p>remote</p>", { status: 200 }))

    expect(await fetchContent("about")).toBe("<p>remote</p>")
    expect(fetchMock).toHaveBeenCalledWith(contentUrl("about"), {
      next: { revalidate: 900 },
      signal: expect.any(AbortSignal),
    })
    expect(Sentry.captureException).not.toHaveBeenCalled()
  })

  it("falls back to the bundled content on a non-ok response", async () => {
    fetchMock.mockResolvedValue(new Response("Not Found", { status: 404 }))

    expect(await fetchContent("about")).toBe(bundled("about"))
    expect(Sentry.captureException).toHaveBeenCalledTimes(1)
  })

  it("falls back to the bundled content when fetch rejects", async () => {
    const error = new Error("network down")
    fetchMock.mockRejectedValue(error)

    expect(await fetchContent("sidebar")).toBe(bundled("sidebar"))
    expect(Sentry.captureException).toHaveBeenCalledWith(error, expect.objectContaining({ level: "warning" }))
  })

  it("falls back to the bundled content when GitHub doesn't respond in time", async () => {
    // Hand back an already timed out signal rather than waiting for the real timeout
    const timeoutSpy = vi
      .spyOn(AbortSignal, "timeout")
      .mockReturnValue(AbortSignal.abort(new DOMException("The operation timed out.", "TimeoutError")))
    fetchMock.mockImplementation(async (_url: string, init: RequestInit) => {
      throw init.signal?.reason
    })

    expect(await fetchContent("about")).toBe(bundled("about"))
    expect(timeoutSpy).toHaveBeenCalledWith(FETCH_TIMEOUT_MS)
    expect(Sentry.captureException).toHaveBeenCalledWith(
      expect.objectContaining({ name: "TimeoutError" }),
      expect.objectContaining({ level: "warning" }),
    )
  })
})
