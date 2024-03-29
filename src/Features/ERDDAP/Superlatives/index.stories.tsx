import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"

import { UnitSystem } from "Features/Units/types"

import { ShowSuperlatives, Superlatives } from "./index"

import { platforms } from "stories/platforms"

const meta: Meta<typeof Superlatives> = {
  component: Superlatives,
  title: "ERDDAP/Superlatives",
}

export default meta

type Story = StoryObj<typeof ShowSuperlatives>

export const Configurable: Story = {
  args: {
    unitSystem: UnitSystem.english,
    platforms,
    searchStartTime: new Date("2020-09-23T19:49:02.212Z"),
  },
  render: (args) => <ShowSuperlatives {...args} />,
}

export const ShouldNotShowOutdatedData: Story = {
  args: {
    unitSystem: UnitSystem.english,
    platforms,
    searchStartTime: new Date("2020-09-30T19:49:02.212Z"),
  },
  render: (args) => <ShowSuperlatives {...args} />,
}
