/**
 * An abstracted component wrapper for FontAwesome iconography.
 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faIcons, iconName } from "./iconsMap"

type Props = {
  iconName: iconName
  className?: string
}

function Icon({ iconName, className, ...props }: Props) {
  if (!faIcons[iconName]) throw new Error(`Invalid icon name: ${iconName}`)

  return <FontAwesomeIcon icon={faIcons[iconName]} className={className} {...props} />
}

export default Icon
