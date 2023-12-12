import { Feature } from "@turf/helpers"
import { paths } from "Shared/constants"
import { urlPartReplacer } from "Shared/urlParams"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ListGroup } from "reactstrap"

interface Props {
  platforms: Feature[]
}

export const ErddapWaterLevelSensorListBase: React.FC<Props> = ({ platforms }: Props) => {
  const [sensors, setSensors] = useState<Feature[]>()

  useEffect(() => {
    if (platforms) {
      const listItems = platforms.sort((a, b) => {
        const aId = a.id as string
        const bId = b.id as string

        return aId.localeCompare(bId, undefined, {
          numeric: true,
          sensitivity: "base",
        })
      })
      setSensors(listItems)
    }
  }, [platforms])

  return (
    <ListGroup>
      {sensors &&
        sensors.map((s) => (
          <Link
            key={s.id}
            href={urlPartReplacer(paths.waterLevel.sensor, ":id", s.id as string)}
            className="list-group-item list-group-item-action"
          >
            {s.id}
          </Link>
        ))}
    </ListGroup>
  )
}
