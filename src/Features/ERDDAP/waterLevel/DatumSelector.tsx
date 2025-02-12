import { Col, InputGroup, ListGroup, ListGroupItem, Row } from "reactstrap"

import { WarningAlert } from "components/Alerts"
import { getDatumDisplayName } from "Shared/dataTypes"

import { DatumOffsets, Datums } from "../types"
import { useDatum } from "./hooks"

export const DatumSelector = ({ datumOffsets }: { datumOffsets: DatumOffsets }) => {
  const { datum, setDatum } = useDatum()

  let options: React.ReactNode[] = []

  if (datumOffsets) {
    options = Object.keys(datumOffsets).map((d, index) => {
      return (
        <label key={`radio-label-${index}`}>
          <input
            type="radio"
            id={`offset-${d}`}
            value={d}
            key={`offset-${d}`}
            checked={datum === d}
            onChange={(e) => setDatum(d as Datums)}
            style={{ marginRight: "5px" }}
          ></input>
          {getDatumDisplayName(d)}
        </label>
      )
    })
    options.push(
      <label key={`radio-label-navd88`}>
        <input
          type="radio"
          id={`offset-navd88`}
          value={Datums.NAVD88}
          key={`offset-navd88`}
          checked={datum === Datums.NAVD88}
          onChange={(e) => setDatum(Datums.NAVD88)}
          style={{ marginRight: "5px" }}
        ></input>
        NAVD88
      </label>,
    )
  }

  return (
    <ListGroup style={{ marginBottom: "20px", marginTop: "20px" }}>
      <ListGroupItem>
        <Row style={{ width: "fit-content", verticalAlign: "middle" }}>
          {options.length > 0 ? (
            <div>
              <Col style={{ width: "85px", margin: 0 }}>
                <h6 style={{ width: "100%", paddingTop: "10px", fontWeight: "bold" }}>Datum: </h6>
              </Col>
              <Col style={{ margin: 0, padding: 0 }}>
                <InputGroup className="datum-radio-group">{options}</InputGroup>
              </Col>
            </div>
          ) : (
            <WarningAlert>Datum selection is not available for this site</WarningAlert>
          )}
        </Row>
      </ListGroupItem>
    </ListGroup>
  )
}
