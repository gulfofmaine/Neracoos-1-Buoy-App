import { projectedTimeframeOptions, shortIso, timeframeOptions } from "Shared/time"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Button, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from "reactstrap"

// date picker eith start and end date (so two of them) and a "graph" button that changes the url based on the value of the two dates.
// Defaults should be the url defaults (which is 3 days prior and a week out)

export const TimeframeSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [startDate, setStartDate] = useState<any>()
  const [endDate, setEndDate] = useState<any>()
  const params = useParams()
  const startTime = decodeURIComponent(params.startTime as string)
  const endTime = decodeURIComponent(params.endTime as string)

  const getStartDate = (e) => {
    const startDate = new Date(e.target.value)
    // console.log(shortIso(startDate))
    // const startDate = shortIso(e.value)
    setStartDate(e.target.value)
  }

  useEffect(() => {
    setStartDate(startTime)
    setEndDate(endTime)
  }, [startTime, endTime])

  const getEndDate = (e) => {
    const endDate = new Date(e.target.value)
    setEndDate(e.target.value)
  }

  // const options = Object.keys(timeframeSelections).map((option, index) => {
  //   if (option === "year") {
  //     return
  //   }
  //   return (
  //     <DropdownItem
  //       key={index}
  //       href={`/water-level/sensor/${params.sensorId}/${
  //         projected ? decodeURIComponent(params.startTime as string) : timeframeSelections[option].label
  //       }/${projected ? timeframeSelections[option].label : decodeURIComponent(params.endTime as string)}/${
  //         params.datum
  //       }`}
  //       onClick={() => handleTimeframeSelection(option)}
  //       style={{ cursor: "pointer" }}
  //     >
  //       {timeframeSelections[option].label}
  //     </DropdownItem>
  //   )
  // })

  return (
    <Row style={{ width: "fit-content", verticalAlign: "middle", marginBottom: "20px" }}>
      <Col style={{ width: "110px", margin: 0 }}>
        <h6 style={{ width: "100%", paddingTop: "10px", fontWeight: "bold" }}>Timeframe: </h6>
      </Col>
      {startDate && endDate && (
        <div>
          <Col style={{ margin: 0, padding: 0 }}>
            <label for="start">Start date:</label>
            <input type="date" id="start" name="timeframe-start" value={startDate} onChange={(e) => getStartDate(e)} />
            <label for="end">End date:</label>
            <input type="date" id="end" name="timeframe-end" value={endDate} onChange={(e) => getEndDate(e)} />
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
          <a href={`/water-level/sensor/${params.sensorId}/${startDate}/${endDate}/${params.datum}`}>
            <Button>Submit</Button>
          </a>
        </div>
      )}
    </Row>
  )
}
