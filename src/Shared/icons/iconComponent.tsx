/**
 * An abstracted component wrapper for FontAwesome iconography.
 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

type IconProps = {
  className?: string
  height?: number
}

function mkIcon(faIcon: IconDefinition) {
  function Icon({ className, ...rest }: IconProps) {
    return <FontAwesomeIcon icon={faIcon} className={className} {...rest} />
  }
  return Icon
}

export default mkIcon
