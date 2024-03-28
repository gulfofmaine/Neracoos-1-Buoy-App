import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Alert, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from "reactstrap"
import { useDecodedUrl } from "util/hooks"
import { DatumOffsets } from "../types"
import { getDatumDisplayName } from "Shared/dataTypes"

export const DatumSelector = ({ datumOffsets }: { datumOffsets: DatumOffsets }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [datumOptions, setDatumOptions] = useState<any>()
  const params = useParams()
  const sensorId = useDecodedUrl(params.sensorId as string)

  const close = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (datumOffsets) {
      const options = Object.keys(datumOffsets).map((d, index) => {
        return (
          <DropdownItem
            key={`offset-${d}`}
            href={`/water-level/sensor/${sensorId}/${params.startTime}/${params.endTime}/${d}`}
            onClick={() => close()}
          >
            {getDatumDisplayName(d)}
          </DropdownItem>
        )
      })
      setDatumOptions(options.length ? options : null)
    }
  }, [datumOffsets])

  return (
    <Row style={{ width: "fit-content", verticalAlign: "middle", marginBottom: "20px", marginTop: "20px" }}>
      {datumOptions ? (
        <div>
          <Col style={{ width: "85px", margin: 0 }}>
            <h6 style={{ width: "100%", paddingTop: "10px", fontWeight: "bold" }}>Datum: </h6>
          </Col>
          <Col style={{ margin: 0, padding: 0 }}>
            <Dropdown
              isOpen={isOpen}
              toggle={() => setIsOpen(!isOpen)}
              style={{ border: "1px solid black", borderRadius: "7px" }}
            >
              <DropdownToggle color={"#FFFFFF"} caret={true}>
                {getDatumDisplayName(decodeURIComponent(params.datum as string))}
              </DropdownToggle>

              {datumOptions && (
                <DropdownMenu end={true} style={{ padding: "5px" }}>
                  {datumOptions}
                </DropdownMenu>
              )}
            </Dropdown>
          </Col>
        </div>
      ) : (
        <Alert color="warning">Datum selection is not available for this sensor</Alert>
      )}
    </Row>
  )
}
