import "@testing-library/jest-dom/vitest"
import { afterEach } from "vitest"
import { cleanup } from "@testing-library/react"

// Highcharts v12 calls CSS?.supports() at module load time, but jsdom doesn't implement window.CSS.
// Polyfill it so the feature-detect succeeds instead of throwing.
if (typeof window !== "undefined") {
  if (!window.CSS) {
    Object.defineProperty(window, "CSS", {
      value: { supports: () => false },
      writable: true,
      configurable: true,
    })
  } else if (typeof window.CSS.supports !== "function") {
    window.CSS.supports = () => false
  }
}

afterEach(() => {
  cleanup()
})
