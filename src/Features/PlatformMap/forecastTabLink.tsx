import { Feature } from '@turf/helpers'
import * as React from 'react'
import { connect } from 'react-redux'

import { StoreState } from '@app/constants'

import { Geometry } from './types'


export interface Props {
    platformId: string
}

export interface ReduxProps {
    platforms: Feature[]
}

function mapStateToProps({ platformMap }: StoreState) {
    return {
        platforms: platformMap.platforms
    }
}


export class ForecastTabLinkBase extends React.Component<Props & ReduxProps, object> {
    public render() {
        if (this.props.platforms.length > 0) {
            const platforms = this.props.platforms.filter((p) => p.properties!.name === this.props.platformId)

            if (platforms.length > 0) {
                const platform: Feature = platforms[0]

                if (platform.properties) {
                    const { coordinates } = platform.geometry as Geometry

                    const url = `https://marine.weather.gov/MapClick.php?lon=${coordinates[0]}&lat=${coordinates[1]}`

                    return (
                        <a className="dropdown-item nav-item" href={url}>
                            Marine Forecast
                        </a>
                    )
                }
            }
        }

        return null
    }
}


export const ForecastTabLink = connect(mapStateToProps)(ForecastTabLinkBase)
