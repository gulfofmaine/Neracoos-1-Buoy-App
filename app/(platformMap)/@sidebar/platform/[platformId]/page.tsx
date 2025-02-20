import React, { use } from "react"

import { PlatformInfo } from "components/PlatformInfo/platformInfo"
import { useDecodedUrl } from "util/hooks"

interface Params {
  platformId: string
}

export default function PlatformSidebar(props: { params: Params | Promise<Params> }) {
  const params = props.params instanceof Promise ? use(props.params) : props.params
  const { platformId } = params
  const id = useDecodedUrl(platformId)

  return <PlatformInfo id={id} />
}
