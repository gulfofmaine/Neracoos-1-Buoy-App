import { timeframeOptions } from "Shared/time"
import { useState } from "react"
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from "reactstrap"

export const TimeframeSelector = ({ setTimeframe, timeframe }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleTimeframeSelection = (option) => {
    setTimeframe(timeframeOptions[option])
    setIsOpen(false)
  }

  const options = Object.keys(timeframeOptions).map((option, index) => {
    if (option === "year") {
      return
    }
    return (
      <DropdownItem key={index} onClick={() => handleTimeframeSelection(option)} style={{ cursor: "pointer" }}>
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
            {timeframe.label}
          </DropdownToggle>
          {options && <DropdownMenu end={true}>{options}</DropdownMenu>}
        </Dropdown>
      </Col>
    </Row>
  )
}
