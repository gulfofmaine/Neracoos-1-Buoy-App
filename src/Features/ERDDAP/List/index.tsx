/**
 * Display platforms filtered by a given bounding box
 */
import bboxPolygon from '@turf/bbox-polygon'
import booleanContains from '@turf/boolean-contains'
import { Feature } from '@turf/helpers'
import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListGroup } from 'reactstrap'

import {
    paths,
    StoreState
} from '@app/constants'
import { BoundingBox } from '@app/Shared/regions'


export interface Props {
    /** Bounding box to filter platforms by */
    boundingBox?: BoundingBox
}

export interface ReduxProps {
    platforms: Feature[]
}

function mapStateToProps({ erddap }: StoreState): ReduxProps {
    return {
        platforms: erddap.platforms
    }
}


/**
 * Display platforms filtered by a given bounding box
 */
export class ErddapPlatformListBase extends React.Component<Props & ReduxProps, object> {

    public render() {
        if (this.props.boundingBox && this.props.platforms.length > 0) {
            const bbox = this.props.boundingBox
            const polygon = bboxPolygon([bbox.west, bbox.south, bbox.east, bbox.north])

            const filteredPlatforms = this.props.platforms.filter((platform) => platform.geometry !== null && booleanContains(polygon, (platform as any)) && platform.properties !== null)

            if (filteredPlatforms.length > 0) {
                const listItems = filteredPlatforms.map((platform) => {
                    const { id } = platform

                    return (
                        <Link key={id} to={ paths.platforms.root + name } className="list-group-item list-group-item-action">{ id }</Link>
                    ) 
                })

                return (
                    <ListGroup>
                        { listItems }
                    </ListGroup>
                )
            }
        }

        // If for some reason or another we do not have any items to display yet, return nothing
        return (
            null
        )
    }
}

/** Redux connected Platform List. See [[ErddapPlatformListBase]] for details */
export const ErddapPlatformList = connect(mapStateToProps)(ErddapPlatformListBase)
