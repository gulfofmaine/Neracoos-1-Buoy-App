import { useRouter } from "@bprogress/next"
import { usePathname } from "next/navigation"
import { Button, ButtonProps } from "react-bootstrap"
import { ArrowLeftIcon } from "Shared/icons/iconsMap"

type BackToPlatformButtonProps = ButtonProps & {}

export const BackToPlatformButton = ({ ...props }: BackToPlatformButtonProps) => {
  const router = useRouter()
  const path = usePathname()

  const handleBackClick = () => {
    // segs: ['', 'platform', '[platformID]', 'observations', '[standardName]']
    const urlSegs = path.split("/")
    if (urlSegs[1] === "platform") {
      router.push("/" + urlSegs[1] + "/" + urlSegs[2])
    }
  }

  return (
    <Button onClick={handleBackClick} {...props}>
      <span className="d-flex flex-row align-items-center gap-2">
        <ArrowLeftIcon className="text-info fa-l" />
        <a className="text-info">Back</a>
      </span>
    </Button>
  )
}
