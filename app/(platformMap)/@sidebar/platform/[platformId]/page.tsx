import { PlatformInfo } from "components/PlatformInfo/platformInfo"
import { useDecodedUrl } from "util/hooks"

export default async function PlatformSidebar({ params }: { params: { platformId: string } }) {
  const id = useDecodedUrl(params.platformId)

  return <PlatformInfo id={id} />
}
