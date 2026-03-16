/**
 * An abstracted component wrapper for FontAwesome iconography.
 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faIcons, faIcon, iconName } from "./iconsMap"

type Props = {
  iconName: iconName
  className?: string
}

function Icon({ iconName, className, ...props }: Props) {
  return <FontAwesomeIcon icon={faIcons[iconName]} className={className} {...props} />
}

export default Icon
