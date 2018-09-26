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
import { bindActionCreators, Dispatch } from 'redux'

import { paths, StoreState } from '@app/constants'
import { BoundingBox } from '@app/Shared/regions'

import { platformLocationsLoad } from './actions'
import { PlatformProperties } from './types'

export interface Props {
    boundingBox?: BoundingBox
}

export interface ReduxProps {
    loadPlatforms: () => void
    platforms: Feature[]
}

function mapStateToProps({ platformMap }: StoreState) {
    return {
        platforms: platformMap.platforms
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    loadPlatforms: platformLocationsLoad
}, dispatch)

export class PlatformListBase extends React.Component<Props & ReduxProps, object> {
    constructor(props: any) {
        super(props)
    }

    public render() {
        if (this.props.boundingBox && this.props.platforms.length > 0) {
            const bbox = this.props.boundingBox
            const polygon = bboxPolygon([bbox.west, bbox.south, bbox.east, bbox.north])

            const filteredPlatforms = this.props.platforms.filter((platform) => booleanContains(polygon, platform) && platform.properties !== null)

            if (filteredPlatforms.length > 0) {
                const listItems = filteredPlatforms.map((platform, index) => {
                    const { name } = platform.properties as PlatformProperties
                    // tslint:disable-next-line:no-console
                    console.log(name)
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
        return (
            null
        )
    }
}

export const PlatformList = connect(mapStateToProps, mapDispatchToProps)(PlatformListBase)
