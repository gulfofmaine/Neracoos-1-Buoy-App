import { usePathname } from "next/navigation"
import Link from "next/link"
import { ArrowLeftIcon } from "Shared/icons/iconsMap"

type BackToPlatformButtonProps = {
  className: string
}

export const BackToPlatformButton = ({ className }: BackToPlatformButtonProps) => {
  const path = usePathname()
  const urlSegs = path.split("/")
  const targetLink = urlSegs[1] === "platform" ? `/${urlSegs[1]}/${urlSegs[2]}` : path

  return (
    <Link href={targetLink} className={className}>
      <span className="d-flex flex-row align-items-center gap-2">
        <ArrowLeftIcon className="text-info fa-l" />
        <span className="text-info">Back</span>
      </span>
    </Link>
  )
}
