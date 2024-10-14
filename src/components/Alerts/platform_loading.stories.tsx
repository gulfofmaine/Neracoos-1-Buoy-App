import type { Meta, StoryObj } from "@storybook/react"

import { PlatformLoadingAlert } from "./platform_loading"

const meta: Meta<typeof PlatformLoadingAlert> = {
  component: PlatformLoadingAlert,
  title: "Components/Alerts/PlatformLoading",
}

export default meta

type Story = StoryObj<typeof PlatformLoadingAlert>

export const PlatformLoading: Story = {
  args: {
    time_series: {
      name: "test",
      data_type: {
        long_name: "test",
      },
      units: "test",
      variable: "test",
      server: "test",
    },
  },
}
