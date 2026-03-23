/**
 *  Centralized FontAwesome icon file. Extend or limit the icons used in the
 *  project by importing the new icon to be used and adjusting the exported
 *  icon components below.
 */

import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faArrowUpFromBracket,
  faChartLine,
  faCircleInfo,
  faDownLeftAndUpRightToCenter,
  faExternalLinkAlt,
  faLocationArrow,
  faTriangleExclamation,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons"

import mkIcon from "./iconComponent"

export const InfoCircleIcon = mkIcon(faCircleInfo)
export const ExternalLinkAltIcon = mkIcon(faExternalLinkAlt)
export const ExpandIcon = mkIcon(faUpRightAndDownLeftFromCenter)
export const LocationArrowIcon = mkIcon(faLocationArrow)
export const CollapseIcon = mkIcon(faDownLeftAndUpRightToCenter)
export const ExportIcon = mkIcon(faArrowUpFromBracket)
export const AlertIcon = mkIcon(faTriangleExclamation)
export const ArrowLeftIcon = mkIcon(faArrowLeft)
export const ArrowRightIcon = mkIcon(faArrowRight)
export const ArrowUpIcon = mkIcon(faArrowUp)
export const ArrowDownIcon = mkIcon(faArrowDown)
export const LineChartIcon = mkIcon(faChartLine)
