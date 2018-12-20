/**
 * Current observations table component
 */
import * as React from 'react'
import { connect } from 'react-redux'
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap'

import { StoreState } from '@app/constants'
import { round } from '@app/Shared/math'
import { 
    conversion, 
    convertUnit 
} from '@app/Shared/unitConversion'

import { PlatformFeatureWithDatasets } from '../../types'


export interface Props {
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

const itemStyle = { padding: '.5rem', paddingLeft: '1rem' }


/**
 * Current observations table
 */
export class ErddapObservationTableBase extends React.Component<Props & ReduxProps, object> {

    public render() {
        const filteredPlatorms = this.props.platforms.filter((p) => p.id === this.props.platformId)

        if (filteredPlatorms.length > 0) {
            const platform  = filteredPlatorms[0]
            const times = platform.properties.readings.filter((d) => d.time !== null).map((d) => new Date(d.time as string))
            times.sort()

            return (
                <ListGroup style={{paddingTop: '1rem'}}>
                    { times.length > 0 ? (
                        <ListGroupItem style={itemStyle}><b>Last updated at:</b> {times[ times.length -1].toLocaleString() }</ListGroupItem>
                    ) : null }
                    <TableItem platform={platform} data_type='wind_speed' name='Wind Speed' prefered_unit='knot' printed_unit='knots' />
                    <TableItem platform={platform} data_type='wind_gust' name='Wind Gusts' prefered_unit='knot' printed_unit='knots'/>
                    <TableItem platform={platform} data_type='wind_from_direction' name='Wind Direction' printed_unit='degrees' />

                    <TableItem platform={platform} data_type="sea_surface_wave_significant_height" name="Wave Height" printed_unit="feet" prefered_unit="ft" />
                    <TableItem platform={platform} data_type='significant_height_of_wind_and_swell_waves' name='Wave Height' printed_unit='feet' prefered_unit='ft' />
                    
                    <TableItem platform={platform} data_type='sea_surface_swell_wave_period' name='Wave Period' printed_unit='seconds' />
                    <TableItem platform={platform} data_type='dominant_wave_period' name='Wave Period' printed_unit='seconds' />
                    
                    <TableItem platform={platform} data_type='mean_wave_direction' name='Wave Direction' printed_unit='degrees' />
                    <TableItem platform={platform} data_type='air_temperature' name='Air Temperature' printed_unit='F' prefered_unit='F' />
                    <TableItem platform={platform} data_type='sea_water_temperature' name='Water Temperature' printed_unit='F' prefered_unit='F' />
                    <TableItem platform={platform} data_type='visibility_in_air' name='Visibility' printed_unit='miles' prefered_unit='mi' />
                </ListGroup>
            )
        }

        // If we haven't returned anything else
        return null
    }
}


interface TableItemProps {
    platform: PlatformFeatureWithDatasets
    data_type: string
    name: string
    prefered_unit?: string
    printed_unit: string
}


// tslint:disable:max-classes-per-file
class TableItem extends React.Component<TableItemProps, object> {

    public render() {
        const data = this.props.platform.properties.readings.filter((ts) => ts.data_type.standard_name === this.props.data_type)

        if (data.length > 0) {
            const selected = data[0]

            return (
                <ListGroupItem style={ itemStyle }>
                    <b>{ this.props.name }:</b> {
                        this.props.prefered_unit !== undefined 
                        ? (`${conversion(selected.value as number, selected.data_type.units, this.props.prefered_unit)} ${this.props.printed_unit}`) 
                        : (`${round(selected.value as number, 1)} ${this.props.printed_unit} ${convertUnit(selected.data_type.units, selected.value as number)}`)}
                </ListGroupItem>
            )
        }

        return null
    }
}

/** Redux connected Observation Table. See [[ErddapObservationTableBase]] for details. */
export const ErddapObservationTable = connect(mapStateToProps)(ErddapObservationTableBase)
