export const LegendItem = ({ color, text }) => {
  return (
    <div className="legend-item">
      <div className="legend-color" style={{ backgroundColor: color }}></div>
      {text}
    </div>
  )
}
