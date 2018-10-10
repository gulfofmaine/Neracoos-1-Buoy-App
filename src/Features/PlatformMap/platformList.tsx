/**
 * Display platforms filtered by a given bounding box.
 */

import bboxPolygon from '@turf/bbox-polygon'
import booleanContains from '@turf/boolean-contains'
import { Feature } from '@turf/helpers'
import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { 
    ListGroup, 
    // ListGroupItem 
} from 'reactstrap'

import { paths, StoreState } from '@app/constants'
import { BoundingBox } from '@app/Shared/regions'

import { PlatformProperties } from './types'


export interface Props {
    /** Bounding box to filter platforms by. */
    boundingBox?: BoundingBox
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
 * Display platforms filtered by a given bounding box.
 */
export class PlatformListBase extends React.Component<Props & ReduxProps, object> {

    public render() {
        if (this.props.boundingBox && this.props.platforms.length > 0) {
            const bbox = this.props.boundingBox
            const polygon = bboxPolygon([bbox.west, bbox.south, bbox.east, bbox.north])

            const filteredPlatforms = this.props.platforms.filter((platform) => booleanContains(polygon, platform) && platform.properties !== null)

            if (filteredPlatforms.length > 0) {
                const listItems = filteredPlatforms.map((platform, index) => {
                    const { name } = platform.properties as PlatformProperties

                    return (
                        <Link key={index} to={ paths.platforms.root + name } className="list-group-item list-group-item-actio">{ name }</Link>
                    )
                })

                return (
                    <ListGroup>
                        { listItems }
                    </ListGroup>
                )
            }
        }

        // If there has been displayed already, return null
        return (
            null
        )
    }
}

/** Redux connected Platform list. See [[PlatformListBase]] for details. */
export const PlatformList = connect(mapStateToProps)(PlatformListBase)
