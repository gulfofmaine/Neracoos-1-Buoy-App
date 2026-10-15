import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { LoadingAlert } from "./loading"

const meta: Meta<typeof LoadingAlert> = {
  component: LoadingAlert,
  title: "Components/Alerts/Loading",
}

export default meta

type Story = StoryObj<typeof LoadingAlert>

export const Loading: Story = {
  args: {
    children: "Loading platform data files",
  },
}
