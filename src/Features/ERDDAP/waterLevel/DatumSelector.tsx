import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Alert, Col, InputGroup, ListGroup, ListGroupItem, Row } from "reactstrap"
import { DatumOffsets } from "../types"
import { getDatumDisplayName } from "Shared/dataTypes"

export const DatumSelector = ({ datumOffsets }: { datumOffsets: DatumOffsets }) => {
  const router = useRouter()
  const [datumOptions, setDatumOptions] = useState<any>()
  const params = useParams()
  const [datumSelected, setDatumSelected] = useState(params.datum)

  console.log(datumOffsets)

  const handleChange = (offset) => {
    router.push(`/water-level/sensor/${params.sensorId}/${params.startTime}/${params.endTime}/${offset}`)
  }

  useEffect(() => {
    if (datumOffsets) {
      const options = Object.keys(datumOffsets).map((d, index) => {
        return (
          <label>
            <input
              type="radio"
              id={`offset-${d}`}
              value={d}
              key={`offset-${d}`}
              checked={datumSelected === d}
              onChange={() => handleChange(d)}
              style={{ marginRight: "5px" }}
            ></input>
            {getDatumDisplayName(d)}
          </label>
        )
      })
      setDatumOptions(options.length ? options : null)
    }
  }, [datumOffsets])

  return (
    <ListGroup style={{ marginBottom: "20px", marginTop: "20px" }}>
      <ListGroupItem>
        <Row style={{ width: "fit-content", verticalAlign: "middle" }}>
          {datumOptions ? (
            <div>
              <Col style={{ width: "85px", margin: 0 }}>
                <h6 style={{ width: "100%", paddingTop: "10px", fontWeight: "bold" }}>Datum: </h6>
              </Col>
              <Col style={{ margin: 0, padding: 0 }}>
                <InputGroup className="datum-radio-group">{datumOptions}</InputGroup>
              </Col>
            </div>
          ) : (
            <Alert color="warning">Datum selection is not available for this sensor</Alert>
          )}
        </Row>
      </ListGroupItem>
    </ListGroup>
  )
}
