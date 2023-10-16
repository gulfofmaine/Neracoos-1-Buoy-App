import type { Meta, StoryObj } from '@storybook/react';
import * as React from "react"
import { MemoryRouter } from "react-router-dom"

import NeracoosNavBar from "./index"

const meta: Meta<typeof NeracoosNavBar> = {
  component: NeracoosNavBar,
  title: "Components/NavBar",
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export default meta

type Story = StoryObj<typeof NeracoosNavBar>

export const NavBar: Story = {}
