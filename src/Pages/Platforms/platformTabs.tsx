/**
 * Tabs that are displayed on a platform page.
 */

import * as React from 'react'
import { 
    Link, 
    Route,
    RouteComponentProps,
    Switch
} from 'react-router-dom'
import {
    Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    NavItem,
    NavLink,
    Row,
} from 'reactstrap'

import { paths } from '@app/constants'
import { urlPartReplacer } from '@app/Shared/urlParams'

import { 
    ObservedDropdown,
    PlatformLoader
} from '@app/Features/PlatformData'
import { ForecastTabLink } from '@app/Features/PlatformMap'

import { CurrentConditionsPage } from './currentConditions'
import { ForecastsPage } from './forecasts'
import { ObservationsPage } from './observations'
import { WindObservationsPage } from './observationsWind'
import { PlatformMatchParams } from './types';


const initialState = {
    moreDropdownOpen: false
}

type State = Readonly<typeof initialState>

/**
 * Tabs that are displayed on a selected platform page.
 */
export class PlatformTabs extends React.Component<RouteComponentProps, State> {
    public state: State = initialState

    constructor(props: RouteComponentProps) {
        super(props)

        this.moreToggle = this.moreToggle.bind(this)
    }

    public render() {
        // Get our current platform ID
        const { id } = this.props.match.params as PlatformMatchParams

        const { path } = this.props.match

        return (
            // Make sure our platform data is loaded before displaying anything else.
            <PlatformLoader platformId={id}>
                <Row style={{paddingBottom: '1rem'}}>
                    <Col>
                        
                            <Nav tabs={true}>

                            <ObservedDropdown platformId={id} />
                            <Tab to={paths.platforms.platform} path={path} name='Current Conditions' id={id} />
                            <Tab to={paths.platforms.forecast} path={path} name='Forecast' id={id} />

                            {/* Dropdown menu for various links associated with a station */}
                            <Dropdown nav={true} isOpen={this.state.moreDropdownOpen} toggle={this.moreToggle}>
                                <DropdownToggle nav={true} caret={true}>More info</DropdownToggle>
                                
                                <DropdownMenu>
                                    <a className="dropdown-item nav-item" href={'http://neracoos.org/datatools/realtime/all_data?platform=' + id} >
                                        All Data From This Station
                                    </a>
                                    <a className="dropdown-item nav-item" href={'http://neracoos.org/datatools/realtime/compare_stations?platform='  + id} >
                                        Compare Stations
                                    </a>
                                    <a className="dropdown-item nav-item" href="http://neracoos.org/datatools/historical/graphing_download">
                                        Graphing and Download
                                    </a>
                                    <a className="dropdown-item nav-item" href={'http://neracoos.org/datatools/realtime/12_hour_history?platform=' + id} >
                                        12 Hour History
                                    </a>
                                    <a className="dropdown-item nav-item" href={'http://neracoos.org/datatools/realtime/location?platform=' + id} >
                                        Station Description
                                    </a>
                                    <a className="dropdown-item nav-item" href={'http://neracoos.org/datatools/realtime/quick_history?platform=' + id} >
                                        Quick History
                                    </a>
                                    <a className="dropdown-item nav-item" href="http://neracoos.org/datatools/realtime/data_types">
                                        Explanation of Data Types
                                    </a>
                                    <DropdownItem divider={true} />
                                    <ForecastTabLink platformId={id} />
                                    <a className="dropdown-item nav-item" href="https://tidesandcurrents.noaa.gov/">
                                        Tides
                                    </a>  
                                </DropdownMenu>
                            </Dropdown>
                            </Nav>
                        
                    </Col>
                </Row>

                {/* Display our pages for the platform. */}
                <Switch>
                    <Route path={paths.platforms.observationsWind} component={WindObservationsPage} />
                    <Route path={paths.platforms.observations} component={ObservationsPage} />
                    <Route path={paths.platforms.forecast} component={ForecastsPage} />
                    <Route path={paths.platforms.platform} component={CurrentConditionsPage} />
                </Switch>
            </PlatformLoader>
        )
    }

    /**
     * Toggle the dropdown menu for additional data open and closed.
     */
    private moreToggle() {
        this.setState({
            moreDropdownOpen: !this.state.moreDropdownOpen
        })
    }
}

interface TabProps {
    to: string
    id: string
    name: string
    path: string
}

/**
 * Mini component for Tabs that are part of the navbar.
 */
// tslint:disable-next-line:max-classes-per-file
class Tab extends React.Component<TabProps, object> {
    public render() {
        const { to, name, path, id } = this.props

        return (
            <NavItem>
                <NavLink tag={Link} to={ urlPartReplacer(to, ':id', id) } className={to === path ? 'nav-link active' : 'nav-link'}>{ name }</NavLink>
            </NavItem>
        )
    }
}
