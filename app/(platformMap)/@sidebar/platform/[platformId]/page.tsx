import { PlatformInfo } from "components/PlatformInfo/platformInfo"
import React from "react"

import { useDecodedUrl } from "util/hooks"

export default function PlatformSidebar(props: { params: { platformId: string } }) {
  const {platformId} = props.params
  const id = useDecodedUrl(platformId)

  return <PlatformInfo id={id} />
}
