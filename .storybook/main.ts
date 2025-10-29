import type { StorybookConfig } from "@storybook/nextjs-vite"

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.[jt]s", "../src/**/*.stories.[jt]sx", "../app/**/*.stories.[jt]sx"],

  addons: ["@storybook/addon-a11y", "@storybook/addon-links", "@storybook/addon-docs", "@storybook/addon-vitest"],

  framework: "@storybook/nextjs-vite",

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
}
export default config
