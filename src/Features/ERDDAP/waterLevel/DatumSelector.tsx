import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next-nprogress-bar"
import { useCallback, useEffect, useState } from "react"
import { Alert, Col, InputGroup, ListGroup, ListGroupItem, Row } from "reactstrap"
import { DatumOffsets } from "../types"
import { getDatumDisplayName } from "Shared/dataTypes"

export const DatumSelector = ({ datumOffsets }: { datumOffsets: DatumOffsets }) => {
  const router = useRouter()
  const [datumOptions, setDatumOptions] = useState<any>()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [datumSelected, setDatumSelected] = useState(searchParams.get("datum"))
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
      setDatumOptions(options.length ? options : null)
    }
  }, [datumOffsets, datumSelected, startTime, endTime])

  useEffect(() => {
    setDatumSelected(searchParams.get("datum"))
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
            <Alert color="warning">Datum selection is not available for this sensor</Alert>
          )}
        </Row>
      </ListGroupItem>
    </ListGroup>
  )
}
