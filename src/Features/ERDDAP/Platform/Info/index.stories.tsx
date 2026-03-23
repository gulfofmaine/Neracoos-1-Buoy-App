import { platform } from "stories/platform"

import { ErddapPlatformInfoPanel } from "./index"

export default {
  component: ErddapPlatformInfoPanel,
  title: "ERDDAP/Info/Panel",
}

export const platformInfo = () => <ErddapPlatformInfoPanel platform={platform} />
