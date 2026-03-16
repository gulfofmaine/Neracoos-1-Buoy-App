/**
 * An abstracted component wrapper for FontAwesome iconography.
 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcons, faIcon, iconName } from "./iconsMap";

type Props = {
    iconName: iconName,
    className?: string
}

function Icon({ iconName, className, ...props }: Props) {
    const icon: faIcon[string] = faIcons[iconName]; 
    return (
        <FontAwesomeIcon icon={icon} className={className} {...props} />
    )
}

export default Icon;