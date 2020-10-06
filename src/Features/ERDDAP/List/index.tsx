/**
 * Display platforms filtered by a given bounding box
 */
import Link from "next/link"
import bboxPolygon from "@turf/bbox-polygon"
import booleanContains from "@turf/boolean-contains"
import { Feature } from "@turf/helpers"
import * as React from "react"
import { ListGroup } from "reactstrap"

import { paths } from "Shared/constants"
import { BoundingBox } from "Shared/regions"
import { urlPartReplacer } from "Shared/urlParams"

import { UsePlatforms } from "../hooks"

interface Props {
  /** Bounding box to filter platforms by */
  boundingBox?: BoundingBox
}

interface BaseProps extends Props {
  platforms: Feature[]
}

/**
 * Display platforms filtered by a given bounding box
 */
export class ErddapPlatformListBase extends React.Component<BaseProps, object> {
  public render() {
    if (this.props.boundingBox && this.props.platforms.length > 0) {
      const bbox = this.props.boundingBox
      const polygon = bboxPolygon([bbox.west, bbox.south, bbox.east, bbox.north])

      const filteredPlatforms = this.props.platforms.filter(
        (platform) =>
          platform.geometry !== null && booleanContains(polygon, platform as any) && platform.properties !== null
      )

      if (filteredPlatforms.length > 0) {
        const listItems = filteredPlatforms.map((platform) => {
          const { id } = platform

          return (
            <Link key={id} href={urlPartReplacer(paths.platforms.platform, ":id", id as string)}>
              <a className="list-group-item list-group-item-action">{id}</a>
            </Link>
          )
        })

        return <ListGroup>{listItems}</ListGroup>
      }
    }

    // If for some reason or another we do not have any items to display yet, return nothing
    return null
  }
}

/** Redux connected Platform List. See [[ErddapPlatformListBase]] for details */
// export const ErddapPlatformList = connect(mapStateToProps)(ErddapPlatformListBase)

export const ErddapPlatformList: React.FunctionComponent<Props> = ({ boundingBox }) => (
  <UsePlatforms>
    {({ platforms }) => <ErddapPlatformListBase platforms={platforms} boundingBox={boundingBox} />}
  </UsePlatforms>
)
