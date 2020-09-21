import * as React from "react"

import { ErddapPlatformInfoPanel } from "./index"

import { platform } from "stories/platform"

export default {
  component: ErddapPlatformInfoPanel,
  title: "ERDDAP/Info/Panel",
}

export const platformInfo = () => <ErddapPlatformInfoPanel platform={platform} />
