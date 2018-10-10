/**
 * Platform info panel.
 */

import { Feature } from '@turf/helpers'
import * as React from 'react'
import { connect } from 'react-redux'
import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle
} from 'reactstrap'

import { round } from '@app/Shared/math'

import { StoreState } from '@app/constants'

import { Geometry, PlatformProperties } from './types';


export interface Props {
    /** Selected platform ID */
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


/**
 * Platform Info Panel
 */
export class PlatformInfoPanelBase extends React.Component<Props & ReduxProps, object> {
    constructor(props: Props & ReduxProps) {
        super(props)
    }

    public render() {
        if ( this.props.platforms.length > 0 ) {
            const platforms = this.props.platforms.filter((p) => p.properties!.name === this.props.platformId)

            if (platforms.length > 0) {
                const platform: Feature = platforms[0]

                if (platform.properties) {
                    const { name, program, mooring_site_desc } = platform.properties as PlatformProperties
                    const { coordinates } = platform.geometry as Geometry
                    return (
                        <Card>
                            <CardBody>
                                <CardTitle>{ name }</CardTitle>
                                <CardSubtitle>{ mooring_site_desc } - { program }</CardSubtitle>
                                <CardText>
                                    <b>Lat:</b> { round(coordinates[1]) } <b>Lon:</b> { round(coordinates[0]) }
                                    
                                </CardText>
                            </CardBody>
                        </Card>
                    )
                }
            }
        }

        // Return null if nothing else has been displayed if a selected platform cannot be found.
        return null
    }
}

/** Redux connected version of PlatformList. See [[PlatformInfoPanelBase]] for details. */
export const PlatformInfoPanel = connect(mapStateToProps)(PlatformInfoPanelBase)
