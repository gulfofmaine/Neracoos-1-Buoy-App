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

import { StoreState } from '@app/constants'

import { Geometry, PlatformProperties } from './types';

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
                                    <b>Lat:</b> { this.round(coordinates[1]) } <b>Lon:</b> { this.round(coordinates[0]) }
                                    
                                </CardText>
                            </CardBody>
                        </Card>
                    )
                }
            }
        }
        return null
    }

    private round(num: number): number {
        return Math.ceil(num * 100) / 100
    }
}

export const PlatformInfoPanel = connect(mapStateToProps)(PlatformInfoPanelBase)
