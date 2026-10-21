import path from "node:path"
import { fileURLToPath } from "node:url"

import type { StorybookConfig } from "@storybook/nextjs-vite"

const dirname = typeof __dirname !== "undefined" ? __dirname : path.dirname(fileURLToPath(import.meta.url))
const src = path.resolve(dirname, "../src")

// Mirrors tsconfig.json `paths`. Vite's native tsconfig path resolution skips files
// excluded by tsconfig (including *.stories.*), so stories need explicit aliases.
const aliases = [
  { find: /^Shared\//, replacement: `${src}/Shared/` },
  { find: /^components\//, replacement: `${src}/components/` },
  { find: /^Pages\//, replacement: `${src}/formerly_pages/` },
  { find: /^Features\//, replacement: `${src}/Features/` },
  { find: /^stories\//, replacement: `${src}/stories/` },
  { find: /^queryClient$/, replacement: `${src}/queryClient` },
  { find: /^util\//, replacement: `${src}/util/` },
]

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.[jt]sx", "../app/**/*.stories.[jt]sx"],

  addons: ["@storybook/addon-a11y", "@storybook/addon-links", "@storybook/addon-docs", "@storybook/addon-vitest"],

  framework: "@storybook/nextjs-vite",

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },

  viteFinal: (config) => ({
    ...config,
    plugins: [
      ...(config.plugins ?? []),
      { name: "neracoos-tsconfig-aliases", config: () => ({ resolve: { alias: aliases } }) },
    ],
  }),
}
export default config
