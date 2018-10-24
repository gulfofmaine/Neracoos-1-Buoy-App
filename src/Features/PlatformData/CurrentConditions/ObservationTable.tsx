/**
 * Current observations table component
 */
import * as React from 'react'
import { connect } from 'react-redux'
import {
    // Card,
    // CardBody,
    ListGroup,
    ListGroupItem
} from 'reactstrap'

import { StoreState } from '@app/constants'

// import { humanDataName } from '@app/Shared/dataTypes'
import { round } from '@app/Shared/math'
import { conversion } from '@app/Shared/unitConversion'

import { Platform } from '../types'


interface Props {
    /** Platform ID to build the current conditions table for */
    platformId: string
}

interface ReduxProps {
    platforms: Platform[]
}

function mapStateToProps({ platformData }: StoreState) {
    return {
        platforms: platformData.platforms
    }
}

const itemStyle = {padding: '.5rem', paddingLeft: '1rem'}


/**
 * Current observations table component
 */
export class ObservationTableBase extends React.Component<Props & ReduxProps, object> {

    public render() {
        const filteredPlatforms = this.props.platforms.filter((p) => p.id === this.props.platformId)

        if (filteredPlatforms.length < 1) {
            return null
        } else {
            const platform = filteredPlatforms[0]

            const time = platform.data_types.filter((d) => d.data.length > 0).map((d) => d.data[0].time)

            return (
                <ListGroup style={{paddingTop: '1rem'}}>
                    { time.length > 0 ? (
                        <ListGroupItem style={itemStyle}><b>Last updated at:</b> { time[0].toLocaleString() }</ListGroupItem>
                    ) : null }
                    <TableItem platform={platform} data_type='wind_speed' name='Wind Speed' prefered_unit='knot' printed_unit='knots' />
                    <TableItem platform={platform} data_type='wind_gust' name='Wind Gusts' prefered_unit='knot' printed_unit='knots'/>
                    <TableItem platform={platform} data_type='wind_from_direction' name='Wind Direction' printed_unit='degrees' />
                    <TableItem platform={platform} data_type='significant_height_of_wind_and_swell_waves' name='Wave Height' printed_unit='feet' prefered_unit='ft' />
                    <TableItem platform={platform} data_type='dominant_wave_period' name='Wave Period' printed_unit='seconds' />
                    <TableItem platform={platform} data_type='mean_wave_direction' name='Wave Direction' printed_unit='degrees' />
                    <TableItem platform={platform} data_type='air_temperature' name='Air Temperature' printed_unit='F' prefered_unit='F' />
                    <TableItem platform={platform} data_type='sea_water_temperature' name='Water Temperature' printed_unit='F' prefered_unit='F' />
                    <TableItem platform={platform} data_type='visibility_in_air' name='Visibility' printed_unit='miles' prefered_unit='mi' />
                </ListGroup>
            )
        }
    }
}

interface TableItemProps {
    platform: Platform
    data_type: string
    name: string
    prefered_unit?: string
    printed_unit: string
}

// tslint:disable-next-line:max-classes-per-file
class TableItem extends React.Component<TableItemProps, object> {

    public render() {
        const data = this.props.platform.data_types.filter((d) => d.data_type === this.props.data_type && d.depth < 2)

        if (data.length < 1) {
            return null
        } else {
            const selected = data[0]
            const reading = selected.data[selected.data.length - 1]

            return <ListGroupItem style={ itemStyle }><b>{ this.props.name }:</b> { this.props.prefered_unit !== undefined ? conversion(reading.reading, selected.unit, this.props.prefered_unit!) : round(reading.reading, 1) } { this.props.printed_unit }</ListGroupItem>
        }
    }
}

/** Redux connected ObservationTable component. See [[ObservationTableBase]] for details */
export const ObservationTable = connect(mapStateToProps)(ObservationTableBase)
