/**
 *  Centralized FontAwesome icon file. Extend or limit the icons used in the
 *  project by importing the new icon to be used and adjusting the exported
 *  icon map below.
 */

import {
  IconDefinition,
  faInfoCircle,
  faExternalLinkAlt,
  faExpand,
  faLocationArrow,
  faUpRightAndDownLeftFromCenter,
  faDownLeftAndUpRightToCenter,
  faArrowUpFromBracket,
  faTriangleExclamation,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faArrowDown,
  faChartLine,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons"

// Map the available icons here
export const faIcons = {
  infoCircleIcon: faInfoCircle,
  externalLinkAltIcon: faExternalLinkAlt,
  expandIcon: faExpand,
  infoIcon: faCircleInfo,
  LocationArrowIcon: faLocationArrow,
  ExpandIcon: faUpRightAndDownLeftFromCenter,
  CollapseIcon: faDownLeftAndUpRightToCenter,
  exportIcon: faArrowUpFromBracket,
  alertIcon: faTriangleExclamation,
  arrowLeftIcon: faArrowLeft,
  arrowRightIcon: faArrowRight,
  arrowUpIcon: faArrowUp,
  arrowDownIcon: faArrowDown,
  lineChartIcon: faChartLine,
} as const // read only

export type iconName = keyof typeof faIcons
