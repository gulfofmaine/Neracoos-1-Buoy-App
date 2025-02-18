/**
 * Display platforms filtered by a given bounding box
 */
import bboxPolygon from "@turf/bbox-polygon"
import booleanContains from "@turf/boolean-contains"
import Link from "next/link"
import * as React from "react"
import ListGroup from "react-bootstrap/ListGroup"

import { paths } from "Shared/constants"
import { BoundingBox } from "Shared/regions"
import { urlPartReplacer } from "Shared/urlParams"

import { UsePlatforms } from "../hooks"
import { platformName } from "../utils/platformName"
import { PlatformFeature } from "../types"

interface Props {
  /** Bounding box to filter platforms by */
  boundingBox?: BoundingBox
}

interface BaseProps extends Props {
  platforms: PlatformFeature[]
}

/**
 * Display platforms filtered by a given bounding box
 */
export const ErddapPlatformListBase: React.FC<BaseProps> = ({ boundingBox, platforms }: BaseProps) => {
  if (boundingBox && platforms.length > 0) {
    const bbox = boundingBox
    const polygon = bboxPolygon([bbox.west, bbox.south, bbox.east, bbox.north])

    const filteredPlatforms = platforms.filter(
      (platform) =>
        platform.geometry !== null && booleanContains(polygon, platform as any) && platform.properties !== null,
    )

    if (filteredPlatforms.length > 0) {
      const listItems = filteredPlatforms
        .sort((a, b) => {
          const aId = a.id as string
          const bId = b.id as string

          return aId.localeCompare(bId, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        })
        .map((platform) => {
          const { id } = platform

          return (
            <Link
              key={id}
              href={urlPartReplacer(paths.platforms.platform, ":id", id as string)}
              className="list-group-item list-group-item-action"
            >
              {platformName(platform)}
            </Link>
          )
        })

      return <ListGroup>{listItems}</ListGroup>
    }
  }

  // If for some reason or another we do not have any items to display yet, return nothing
  return null
}

/** Redux connected Platform List. See [[ErddapPlatformListBase]] for details */
// export const ErddapPlatformList = connect(mapStateToProps)(ErddapPlatformListBase)

export const ErddapPlatformList: React.FC<Props> = ({ boundingBox }) => (
  <UsePlatforms>
    {({ platforms }) => <ErddapPlatformListBase platforms={platforms} boundingBox={boundingBox} />}
  </UsePlatforms>
)
