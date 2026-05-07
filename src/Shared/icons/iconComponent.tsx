/**
 * An abstracted component wrapper for FontAwesome iconography.
 */

import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

interface IconProps extends Omit<FontAwesomeIconProps, "icon"> {
  className?: string
}

function mkIcon(faIcon: IconDefinition) {
  function Icon({ className, ...rest }: IconProps) {
    return <FontAwesomeIcon icon={faIcon} className={className} {...rest} />
  }
  return Icon
}

export default mkIcon
