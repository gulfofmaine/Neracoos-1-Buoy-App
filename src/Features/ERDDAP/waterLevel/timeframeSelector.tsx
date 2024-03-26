import { projectedTimeframeOptions, timeframeOptions } from "Shared/time"
import { useParams } from "next/navigation"
import { useState } from "react"
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from "reactstrap"

// date picker eith start and end date (so two of them) and a "graph" button that changes the url based on the value of the two dates.
// Defaults should be the url defaults (which is 3 days prior and a week out)

export const TimeframeSelector = ({ timeframe, projected, timeframeSelections }) => {
  const [isOpen, setIsOpen] = useState(false)
  const params = useParams()

  const handleTimeframeSelection = (option) => {
    setIsOpen(false)
  }

  const options = Object.keys(timeframeSelections).map((option, index) => {
    if (option === "year") {
      return
    }
    return (
      <DropdownItem
        key={index}
        href={`/water-level/sensor/${params.sensorId}/${
          projected ? decodeURIComponent(params.startTime as string) : timeframeSelections[option].label
        }/${projected ? timeframeSelections[option].label : decodeURIComponent(params.projectedTimeframe as string)}/${
          params.datum
        }`}
        onClick={() => handleTimeframeSelection(option)}
        style={{ cursor: "pointer" }}
      >
        {timeframeSelections[option].label}
      </DropdownItem>
    )
  })

  return (
    <Row style={{ width: "fit-content", verticalAlign: "middle", marginBottom: "20px" }}>
      <Col style={{ width: "110px", margin: 0 }}>
        <h6 style={{ width: "100%", paddingTop: "10px", fontWeight: "bold" }}>Timeframe: </h6>
      </Col>
      <Col style={{ margin: 0, padding: 0 }}>
        <label for="start">Start date:</label>
        <input type="date" id="start" name="timeframe-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
        <label for="end">End date:</label>
        <input type="date" id="end" name="timeframe-end" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
        {/* <Dropdown
          isOpen={isOpen}
          toggle={() => setIsOpen(!isOpen)}
          style={{ border: "1px solid black", borderRadius: "7px" }}
        >
          <DropdownToggle color={"#FFFFFF"} caret={true}>
            {timeframe}
          </DropdownToggle>
          {options && <DropdownMenu end={true}>{options}</DropdownMenu>}
        </Dropdown> */}
      </Col>
    </Row>
  )
}
