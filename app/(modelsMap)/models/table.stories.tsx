import React from "react"

import { EdrTable } from "./table"
import { loaded } from "./test-data"

export default {
  component: EdrTable,
  title: "Modeling/Table",
  tags: ["skip-snapshot"],
}

export const Table = (args) => <EdrTable {...args} />
Table.args = {
  loaded,
  after: new Date("2022-12-06T19:39:28.946Z"),
}
