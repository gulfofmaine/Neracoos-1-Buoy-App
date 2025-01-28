import booleanContains from "@turf/boolean-contains"
import bboxPolygon from "@turf/bbox-polygon"
import React from "react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ListGroup, ListGroupItem } from "reactstrap"

import { waterLevelPath } from "Shared/urlParams"
import { BoundingBox } from "Shared/regions"

import { platformName } from "../utils/platformName"
import { PlatformFeature } from "../types"

interface Props {
  platforms: PlatformFeature[]
  boundingBox?: BoundingBox
  region?: string
}

export const ErddapWaterLevelSensorListBase: React.FC<Props> = ({ platforms, boundingBox }: Props) => {
  const [sensors, setSensors] = useState<PlatformFeature[]>()

  useEffect(() => {
    if (boundingBox && platforms) {
      const bbox = boundingBox
      const polygon = bboxPolygon([bbox.west, bbox.south, bbox.east, bbox.north])
      const listItems = platforms.sort((a, b) => {
        const aId = a.id as string
        const bId = b.id as string

        return aId.localeCompare(bId, undefined, {
          numeric: true,
          sensitivity: "base",
        })
      })
      const sensorList = listItems.filter(
        (platform) =>
          platform.geometry !== null && booleanContains(polygon, platform as any) && platform.properties !== null,
      )

      setSensors(sensorList)
    }
  }, [platforms, boundingBox])

  //Station defaults to 3 day in past, week in future, and mllw datum
  return (
    <ListGroup flush>
      {sensors &&
        sensors.map((s) => (
          <Link key={s.id} href={waterLevelPath(s.id)} className="list-group-item list-group-item-action">
            {platformName(s)}
          </Link>
        ))}
      {sensors && !sensors?.length && (
        <ListGroup flush>
          <ListGroupItem>No sensors available in this region</ListGroupItem>
        </ListGroup>
      )}
    </ListGroup>
  )
}
