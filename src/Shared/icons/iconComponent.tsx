/**
 * An abstracted component wrapper for FontAwesome iconography.
 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

type IconProps = {
  className?: string
}

function mkIcon(faIcon: IconDefinition) {
  function Icon({ className, ...props }: IconProps) {
    return <FontAwesomeIcon icon={faIcon} className={className} {...props} />
  }
  return Icon
}

export default mkIcon
