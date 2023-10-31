export default function ChartPlot({ params }: { params: { platformId: string; standardName: string } }) {
  return (
    <div>
      {params.standardName} chart for {params.platformId}
    </div>
  )
}
