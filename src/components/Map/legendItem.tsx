export const LegendItem = ({ color, text, observed }) => {
  return (
    <div className={observed ? "legend-item" : "pred-legend-item"}>
      <LegendDot observed={observed} color={color} />
      {observed ? text : ""}
    </div>
  )
}

export const LegendDot = ({ observed, color }) => {
  return <div className={observed ? "obs-legend-color" : "pred-legend-color"} style={{ backgroundColor: color }}></div>
}
