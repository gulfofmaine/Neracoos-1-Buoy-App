interface Props {
  platformId: string
}

const PopupMetric = () => {
  return (
    <div className="caption d-flex flex-row gap-1">
      <strong>Metric name:</strong>
      <span>val</span>
      <span>unit</span>
    </div>
  )
}

const LastUpdated = () => {
  return (
    <span className="caption d-flex gap-1">
      <strong>Last updated:</strong>
      <span> time updated</span>
    </span>
  )
}

export const StationPopup = ({ platformId }: Props) => {
  return (
    <div className="d-flex flex-column justify-content-start">
      <p className="m-0 d-flex justify-content-start">
        <strong>Station: {platformId}</strong>
      </p>
      <LastUpdated />
      <PopupMetric />
      <PopupMetric />
    </div>
  )
}
