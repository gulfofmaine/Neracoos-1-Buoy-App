import type { Meta, StoryObj } from "@storybook/nextjs-vite"

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
    storyshots: {
      disable: true,
    },
  },
}

export default meta

type Story = StoryObj<typeof NeracoosNavBar>

export const NavBar: Story = {}
