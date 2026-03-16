/**
 * An abstracted component wrapper for FontAwesome iconography.
 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

type Props = {
  iconName: IconDefinition
  className?: string
}

function Icon({ iconName, className, ...props }: Props) {
  return <FontAwesomeIcon icon={iconName} className={className} {...props} />
}

export default Icon
