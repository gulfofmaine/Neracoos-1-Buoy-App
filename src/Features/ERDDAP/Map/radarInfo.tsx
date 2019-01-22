import * as React from "react"
import { Alert } from "reactstrap"

const radarInfoUrl =
  "https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer/?f=pjson"

interface State {
  time?: Date
}

const initialState = {}

interface ArcgisJson {
  timeInfo: {
    timeExtent: number[]
  }
}

export class RadarInfo extends React.Component<object, State> {
  public state: State = initialState

  public componentDidMount() {
    this.updateTime()
  }

  public render() {
    const { time } = this.state

    if (time) {
      const threeHours = new Date()
      threeHours.setHours(threeHours.getHours() - 3)

      return (
        <React.Fragment>
          {time < threeHours ? <Alert color="warning">The radar overlay may be old</Alert> : null}
          Radar overlay update time: {time.toLocaleString()}
        </React.Fragment>
      )
    } else {
      return null
    }
  }

  private async updateTime() {
    const result = await fetch(radarInfoUrl)
    const json = (await result.json()) as ArcgisJson

    try {
      const radarValues = json.timeInfo.timeExtent
      this.setState({
        time: new Date(radarValues[1])
      })
    } catch (error) {
      // pass
    }
  }
}
