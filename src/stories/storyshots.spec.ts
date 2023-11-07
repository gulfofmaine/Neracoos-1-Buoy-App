import initStoryshots from "@storybook/addon-storyshots"

// Mock next/navigation hooks for all storyshots
jest.mock("next/navigation", () => {
  const origionalModule = jest.requireActual("next/navigation")

  return {
    __esModule: true,
    ...origionalModule,
    usePathname: jest.fn(() => "/"),
  }
})

initStoryshots({})
