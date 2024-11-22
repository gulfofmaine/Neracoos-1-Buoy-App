import { PlatformFeature, Tides } from "Features/ERDDAP/types"
import { useUnitSystem } from "Features/Units"
import { converter } from "Features/Units/Converter"
import { getValueWithOffset } from "Features/Units/Converter/data_types/_tidal_level"
import { useEffect, useState } from "react"
import { Table } from "reactstrap"
import { PREDICTED_WATER_LEVEL_STANDARDS, WATER_LEVEL_STANDARDS } from "Shared/constants/standards"
import { round } from "Shared/math"

interface TidesTableProps {
  platform: PlatformFeature
  standardName: string
  /** Datum offset BEFORE unit conversion */
  datumOffset: number
}

export const TidesTable = ({ platform, standardName, datumOffset }: TidesTableProps) => {
  const [nextTides, setNextTides] = useState<Tides[]>()
  const unitSystem = useUnitSystem()
  const dataConverter = converter(standardName)

  useEffect(() => {
    const futureTides = platform.properties.readings.find(
      (ts) => ts.type === "Prediction" && PREDICTED_WATER_LEVEL_STANDARDS.includes(ts.data_type.standard_name),
    )?.extrema_values.tides
    const nextTides = futureTides?.filter((t) => new Date(t.time) >= new Date(Date.now())).slice(0, 4)
    setNextTides(nextTides)
  }, [platform])

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
        marginTop: "20px",
        border: "1px solid #d3d3d3",
      }}
    >
      <h6>
        <b>Upcoming Tides</b>
      </h6>
      <Table striped style={{ borderTop: "1px solid #d3d3d3" }}>
        <thead key={2}>
          <tr>
            <th>Tide</th>
            <th>Value</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {nextTides &&
            nextTides.map((t) => (
              <tr>
                <td>{t.tide}</td>
                <td>
                  {`${round(
                    dataConverter.convertToNumber(
                      getValueWithOffset(t.value as number, datumOffset),
                      unitSystem,
                    ) as number,
                    2,
                  )} ${dataConverter.displayName(unitSystem)}`}
                </td>
                <td>{new Date(t.time).toLocaleString()}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}
