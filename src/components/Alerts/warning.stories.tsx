import type { Meta, StoryObj } from "@storybook/react"

import { WarningAlert } from "./warning"

const meta: Meta<typeof WarningAlert> = {
  component: WarningAlert,
  title: "Components/Alerts/Warning",
}

export default meta

type Story = StoryObj<typeof WarningAlert>

export const Warning: Story = {
  args: {
    children: "This is a warning",
  },
}
