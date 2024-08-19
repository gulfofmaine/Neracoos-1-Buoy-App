import React from "react"

import { ModelChart } from "./chart"
import { loaded } from "./test-data"

export default {
  component: ModelChart,
  title: "Modeling/Chart",
  tags: ["skip-snapshot"],
}

export const Chart = (args) => <ModelChart {...args} />
Chart.args = {
  loaded,
}
