import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next-nprogress-bar"
import { useCallback, useEffect, useState } from "react"
import { Col, InputGroup, ListGroup, ListGroupItem, Row } from "reactstrap"

import { WarningAlert } from "components/Alerts"
import { getDatumDisplayName } from "Shared/dataTypes"

import { DatumOffsets } from "../types"

export const DatumSelector = ({ datumOffsets }: { datumOffsets: DatumOffsets }) => {
  const router = useRouter()
  const [datumOptions, setDatumOptions] = useState<any>()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [datumSelected, setDatumSelected] = useState(searchParams.get("datum") || "datum_mllw_meters")
  const endTime = searchParams.get("end")
  const startTime = searchParams.get("start")

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  useEffect(() => {
    if (datumOffsets) {
      const options = Object.keys(datumOffsets).map((d, index) => {
        return (
          <label key={`radio-label-${index}`}>
            <input
              type="radio"
              id={`offset-${d}`}
              value={d}
              key={`offset-${d}`}
              checked={datumSelected === d}
              onChange={(e) => router.push(pathname + "?" + createQueryString("datum", e.target.value))}
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
            value="NAVD88 coming soon"
            key={`offset-navd88`}
            checked={false}
            disabled
            style={{ marginRight: "5px" }}
          ></input>
          NAVD88 (coming soon)
        </label>,
      )
      setDatumOptions(options.length ? options : null)
    }
  }, [datumOffsets, datumSelected, startTime, endTime])

  useEffect(() => {
    setDatumSelected(searchParams.get("datum") || "datum_mllw_meters")
  }, [searchParams])

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
            <WarningAlert>Datum selection is not available for this sensor</WarningAlert>
          )}
        </Row>
      </ListGroupItem>
    </ListGroup>
  )
}
