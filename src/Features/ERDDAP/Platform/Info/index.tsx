/**
 * Platform info panel
 */
import { Geometry } from '@turf/helpers'
import * as React from 'react'
import { connect } from 'react-redux'
import {
    Card,
    CardBody,
    CardText,
    CardTitle
} from 'reactstrap'

import { StoreState } from '@app/constants'
import { round } from '@app/Shared/math'

import { PlatformFeatureWithDatasets } from '../../types'


export interface Props {
    /** selected platform id */
    platformId: string
}

export interface ReduxProps {
    platforms: PlatformFeatureWithDatasets[]
}

function mapStateToProps({ erddap }: StoreState): ReduxProps {
    return {
        platforms: erddap.platforms
    }
}


/**
 * Platform info panel
 */
export class ErddapPlatformInfoPanelBase extends React.Component<Props & ReduxProps, object> {
    
    public render() {
        if ( this.props.platforms.length > 0) {
            const platforms = this.props.platforms.filter((p) => p.id as string === this.props.platformId)

            if (platforms.length > 0) {
                const platform = platforms[0]

                if (platform.properties) {
                    const { id } = platform
                    const { mooring_site_desc } = platform.properties
                    const { coordinates } = platform.geometry as Geometry

                    return (
                        <Card>
                            <CardBody>
                                <CardTitle>Buoy { id }</CardTitle>
                                <CardText>
                                    { mooring_site_desc }
                                    <br />
                                    <b>Lat:</b> { round(coordinates[1] as number)} <b>Lon:</b> {round(coordinates[0] as number)}
                                </CardText>
                            </CardBody>
                        </Card>
                    )
                }
            }
        }

        // return null if nothing else can be displayed
        return null
    }
}

/** Redux connected version of Platform Info. See [[ErddapPlatformInfoPanelBase]] for details. */
export const ErddapPlatformInfoPanel = connect(mapStateToProps)(ErddapPlatformInfoPanelBase)
