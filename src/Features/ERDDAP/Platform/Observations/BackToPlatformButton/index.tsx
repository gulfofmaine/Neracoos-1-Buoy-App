import { usePathname } from "next/navigation"
import Link from "next/link"
import { LinkProps } from "next/link"
import { ArrowLeftIcon } from "Shared/icons/iconsMap"

type BackToPlatformButtonProps = Omit<LinkProps, "href" | "className"> & {}

export const BackToPlatformButton = ({ ...props }: BackToPlatformButtonProps) => {
  const path = usePathname()
  const urlSegs = path.split("/")
  const targetLink = urlSegs[1] === "platform" ? `/${urlSegs[1]}/${urlSegs[2]}` : path

  return (
    <Link href={targetLink} {...props}>
      <span className="d-flex flex-row align-items-center gap-2">
        <ArrowLeftIcon className="text-info fa-l" />
        <span className="text-info">Back</span>
      </span>
    </Link>
  )
}
