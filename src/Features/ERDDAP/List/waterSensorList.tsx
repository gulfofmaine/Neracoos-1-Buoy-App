import { Feature } from "@turf/helpers"
import { timeframeOptions } from "Shared/time"
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

  //Station defaults to 3 day timeframe and msl datum
  return (
    <ListGroup>
      {sensors &&
        sensors.map((s) => (
          <Link
            key={s.id}
            href={`water-level/sensor/${s.id}/${timeframeOptions[2].label}/datum_msl_meters`}
            className="list-group-item list-group-item-action"
          >
            {s.id}
          </Link>
        ))}
    </ListGroup>
  )
}
