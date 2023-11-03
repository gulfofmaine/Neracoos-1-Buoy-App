import type { Meta, StoryObj } from "@storybook/react"

import NeracoosNavBar from "./index"

const meta: Meta<typeof NeracoosNavBar> = {
  component: NeracoosNavBar,
  title: "Components/NavBar",
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof NeracoosNavBar>

export const NavBar: Story = {}
