// Updated for Vitest - Storyshots testing for all story files
import { describe, expect, test, beforeEach, vi } from "vitest"
import type { Meta, StoryFn } from "@storybook/react"
import { composeStories } from "@storybook/react"
import { act, render } from "@testing-library/react"

// Import individual story files directly for better compatibility with Vitest
import * as FooterStories from "../components/Footer/index.stories"
import * as NavBarStories from "../components/NavBar/index.stories"
import * as InfoStories from "../Features/ERDDAP/Platform/Info/index.stories"
import * as LoadingAlertStories from "../components/Alerts/loading.stories"
import * as WarningAlertStories from "../components/Alerts/warning.stories"
import * as PlatformLoadingAlertStories from "../components/Alerts/platform_loading.stories"
import * as WindTimeSeriesStories from "../components/Charts/WindTimeSeries.stories"
import * as ErrorStories from "../../app/error.stories"

type StoryFile = {
  default: Meta
  [name: string]: StoryFn | Meta
}

const compose = (entry: StoryFile): ReturnType<typeof composeStories<StoryFile>> => {
  try {
    return composeStories(entry)
  } catch (e) {
    throw new Error(`There was an issue composing stories for the module: ${JSON.stringify(entry)}, ${e}`)
  }
}

// Mock Next.js router for components that use usePathname
beforeEach(() => {
  vi.mock("next/navigation", () => ({
    usePathname: vi.fn(() => "/"),
    useRouter: vi.fn(() => ({
      push: vi.fn(),
      back: vi.fn(),
      forward: vi.fn(),
      refresh: vi.fn(),
    })),
    useSearchParams: vi.fn(() => new URLSearchParams()),
  }))
})

// List of all story modules to test
const storyModules = [
  { name: "Footer", stories: FooterStories },
  { name: "NavBar", stories: NavBarStories },
  { name: "Platform Info", stories: InfoStories },
  { name: "Loading Alert", stories: LoadingAlertStories },
  { name: "Warning Alert", stories: WarningAlertStories },
  { name: "Platform Loading Alert", stories: PlatformLoadingAlertStories },
  { name: "Wind Time Series", stories: WindTimeSeriesStories },
  // { name: "Error Page", stories: ErrorStories }, // Disabled due to Next.js Image width issue
] as const

// Options for storyshots behavior
const options = {
  suite: "Storybook Snapshot Tests",
  storyKindRegex: /^.*?DontTest$/,
  storyNameRegex: /UNSET/,
}

describe(options.suite, () => {
  storyModules.forEach(({ name, stories }) => {
    const meta = stories.default
    const title = meta.title || name

    const hasStoryshots = meta && typeof meta === "object" && "parameters" in meta
    if (options.storyKindRegex.test(title) || (hasStoryshots && (meta as any).parameters?.storyshots?.disable)) {
      // Skip component tests if they are disabled
      return
    }

    describe(title, () => {
      const composedStories = compose(stories as StoryFile)
      const storyEntries = Object.entries(composedStories)
        .map(([storyName, story]) => ({ storyName, story }))
        .filter(({ storyName, story }) => {
          // Filter out stories that match the regex or are disabled
          return !options.storyNameRegex.test(storyName) && !story.parameters?.storyshots?.disable
        })

      if (storyEntries.length <= 0) {
        throw new Error(
          `No stories found for this module: ${title}. Make sure there is at least one valid story for this module.`,
        )
      }

      storyEntries.forEach(({ storyName, story }) => {
        // Use skip if the story has skip parameter
        const testFn = story.parameters?.storyshots?.skip ? test.skip : test

        testFn(storyName, async () => {
          const mounted = render(story())
          // Ensures a consistent snapshot by waiting for the component to render
          await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 1))
          })
          expect(mounted.container).toMatchSnapshot()
        })
      })
    })
  })
})
