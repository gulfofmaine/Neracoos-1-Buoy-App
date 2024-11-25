import { LegendItem } from "components/Map/legendItem"
import { useState } from "react"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap"

export const WLLegend = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen((prevState) => !prevState)
  return (
    <Dropdown
      isOpen={dropdownOpen}
      size="sm"
      toggle={toggle}
      direction={"down"}
      className="legend-dropdown"
      menuRole="listbox"
    >
      <DropdownToggle caret>Legend</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <div className="legend-container">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                fontSize: "12px",
              }}
            >
              <p style={{ marginBottom: "0", fontSize: "8px" }}>Pred</p>
              <LegendItem color={"#72e400"} text={"No Flooding"} observed={false} />
              <LegendItem color={"#ffff00"} text={"Action"} observed={false} />
              <LegendItem color={"#ff9000"} text={"Minor"} observed={false} />
              <LegendItem color={"#ff2000"} text={"Moderate"} observed={false} />
              <LegendItem color={"#aa00ff"} text={"Major"} observed={false} />
              <LegendItem color={"grey"} text={"No Data"} observed={false} />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", marginLeft: "5px" }}
            >
              <p style={{ marginBottom: "0", fontSize: "8px" }}>Obs</p>
              <LegendItem color={"#72e400"} text={"No Flooding"} observed={true} />
              <LegendItem color={"#ffff00"} text={"Action"} observed={true} />
              <LegendItem color={"#ff9000"} text={"Minor"} observed={true} />
              <LegendItem color={"#ff2000"} text={"Moderate"} observed={true} />
              <LegendItem color={"#aa00ff"} text={"Major"} observed={true} />
              <LegendItem color={"grey"} text={"No Data"} observed={true} />
            </div>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
