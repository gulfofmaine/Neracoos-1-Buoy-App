import { LegendItem } from "components/Map/legendItem"
import Dropdown from "react-bootstrap/Dropdown"

export const WLLegend = () => {
  return (
    <Dropdown
      size="sm"
      direction={"down"}
      className="legend-dropdown"
      // menuRole="listbox"
    >
      <Dropdown.Toggle color="primary">Legend</Dropdown.Toggle>
      <Dropdown.Menu className="legend-dropdown-menu">
        <Dropdown.Item className="legend-dropdown-item">
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
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
