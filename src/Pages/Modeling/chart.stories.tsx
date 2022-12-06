import React from "react"

import { ModelChart } from "./chart"
import { loaded } from "./test-data"

export default {
  component: ModelChart,
  title: "Modeling/Chart",
  parameters: {
    storyshots: {
      disable: true,
    },
  },
}

export const Chart = (args) => <ModelChart {...args} />
Chart.args = {
  loaded,
}
