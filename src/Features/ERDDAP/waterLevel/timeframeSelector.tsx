import { timeframeOptions } from "Shared/time"
import { useParams } from "next/navigation"
import { useState } from "react"
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from "reactstrap"

export const TimeframeSelector = ({ timeframe }) => {
  const [isOpen, setIsOpen] = useState(false)
  const params = useParams()

  const handleTimeframeSelection = (option) => {
    setIsOpen(false)
  }

  const options = Object.keys(timeframeOptions).map((option, index) => {
    if (option === "year") {
      return
    }
    return (
      <DropdownItem
        key={index}
        href={`/water-level/sensor/${params.sensorId}/${timeframeOptions[option].label}/${params.datum}`}
        onClick={() => handleTimeframeSelection(option)}
        style={{ cursor: "pointer" }}
      >
        {timeframeOptions[option].label}
      </DropdownItem>
    )
  })

  return (
    <Row style={{ width: "fit-content", verticalAlign: "middle", marginBottom: "20px" }}>
      <Col style={{ width: "110px", margin: 0 }}>
        <h6 style={{ width: "100%", paddingTop: "10px", fontWeight: "bold" }}>Timeframe: </h6>
      </Col>
      <Col style={{ margin: 0, padding: 0 }}>
        <Dropdown
          isOpen={isOpen}
          toggle={() => setIsOpen(!isOpen)}
          style={{ border: "1px solid black", borderRadius: "7px" }}
        >
          <DropdownToggle color={"#FFFFFF"} caret={true}>
            {timeframe}
          </DropdownToggle>
          {options && <DropdownMenu end={true}>{options}</DropdownMenu>}
        </Dropdown>
      </Col>
    </Row>
  )
}
