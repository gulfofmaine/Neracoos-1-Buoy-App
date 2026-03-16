/**
 *  Centralized FontAwesome icon file. Extend or limit the icons used in the
 *  project by importing the new icon to be used and adjusting the exported
 *  icon map below.
 */

import {
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
export const Icons = {
  infoCircle: faInfoCircle,
  externalLinkAlt: faExternalLinkAlt,
  expand: faExpand,
  info: faCircleInfo,
  LocationArrow: faLocationArrow,
  Expand: faUpRightAndDownLeftFromCenter,
  Collapse: faDownLeftAndUpRightToCenter,
  export: faArrowUpFromBracket,
  alert: faTriangleExclamation,
  arrowLeft: faArrowLeft,
  arrowRight: faArrowRight,
  arrowUp: faArrowUp,
  arrowDown: faArrowDown,
  lineChart: faChartLine,
} as const // read only
