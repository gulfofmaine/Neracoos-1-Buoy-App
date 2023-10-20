import type { StorybookConfig } from "@storybook/nextjs"

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.[jt]s",
    "../src/**/*.stories.[jt]sx",
    "../src/**/*.stories.mdx",
    "../app/**/*.stories.[jt]sx",
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/nextjs",
  docs: {
    autodocs: true,
  },
}
export default config
