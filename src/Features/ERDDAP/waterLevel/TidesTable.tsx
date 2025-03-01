import { useState } from "react"
import { Nav, TabContent, Table, TabPane } from "reactstrap"

import { ContentTab } from "components/TabPane"
import { PlatformFeature } from "Features/ERDDAP/types"
import { useUnitSystem } from "Features/Units"
import { converter } from "Features/Units/Converter"
import { getValueWithOffset } from "Features/Units/Converter/data_types/_tidal_level"
import { WATER_LEVEL_STANDARDS } from "Shared/constants/standards"
import { round } from "Shared/math"

interface TidesTableProps {
  platform: PlatformFeature
  standardName: string
  /** Datum offset BEFORE unit conversion */
  datumOffset: number
}

export const TidesTable = ({ platform, standardName, datumOffset }: TidesTableProps) => {
  const unitSystem = useUnitSystem()
  const dataConverter = converter(standardName)
  const [key, setKey] = useState<number>(0)

  const nextTides = platform.properties.readings
    .filter((ts) => {
      if (
        (ts.type === "Prediction" || ts.type === "Forecast") &&
        WATER_LEVEL_STANDARDS.includes(ts.data_type.standard_name)
      ) {
        if (ts.extrema_values && ts.extrema_values.tides && ts.extrema_values.tides.length > 0) {
          return true
        }
      }
      return false
    })
    .map((ft) => {
      return {
        tides: ft.extrema_values?.tides?.filter((t) => new Date(t.time) >= new Date(Date.now())).slice(0, 4) || [],
        name: ft.dataset_public_name,
        type: ft.type,
      }
    })

  if (!nextTides || nextTides.length < 1) return null

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
      <div style={{ width: "100%" }}>
        <Nav tabs={true} key="nav-0">
          {nextTides &&
            nextTides.map((nt, i) => {
              return <ContentTab name={nt.name} index={i} setOpen={setKey} active={key === i} key={i} />
            })}
        </Nav>
        <TabContent activeTab={key} key="tab-content-1">
          {nextTides &&
            nextTides.map((nt, i) => (
              <TabPane tabId={i} key={`pane-${i}`}>
                <Table striped style={{ borderTop: "1px solid #d3d3d3" }}>
                  <thead key={2}>
                    <tr>
                      <th>Tide</th>
                      <th>Value</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nt.tides.map((t, i) => (
                      <tr key={`tides-row=${i}`}>
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
              </TabPane>
            ))}
        </TabContent>
      </div>
    </div>
  )
}
