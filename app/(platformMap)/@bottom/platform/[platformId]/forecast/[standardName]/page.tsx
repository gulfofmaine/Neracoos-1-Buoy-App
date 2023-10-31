export default function ForecastPage({ params }: { params: { platformId: string; standardName: string } }) {
  return (
    <div>
      {params.standardName} forecast for {params.platformId}
    </div>
  )
}
