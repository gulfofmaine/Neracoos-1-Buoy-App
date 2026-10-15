import { defineConfig, globalIgnores } from "eslint/config"
import next from "eslint-config-next"
import storybook from "eslint-plugin-storybook"

export default defineConfig([
  ...next,
  ...storybook.configs["flat/recommended"],
  {
    rules: {
      "@next/next/no-img-element": "off",
      // React Compiler rules added in eslint-plugin-react-hooks v7. There is an
      // existing backlog of these, so they warn until it is worked down.
      "react-hooks/immutability": "warn",
      "react-hooks/purity": "warn",
      "react-hooks/refs": "warn",
      "react-hooks/set-state-in-effect": "warn",
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "coverage/**",
    "storybook-static/**",
    "storybook-public/**",
    "playwright-report/**",
    "test-results/**",
    "docs/**",
    "next-env.d.ts",
  ]),
])
