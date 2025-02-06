import { PlatformInfo } from "components/PlatformInfo/platformInfo"
import React, { use } from "react"
import { useDecodedUrl } from "util/hooks"

export default function PlatformSidebar(props: { params: Promise<{ platformId: string }> }) {
  const params = use(props.params)
  const id = useDecodedUrl(params.platformId)

  return <PlatformInfo id={id} />
}
