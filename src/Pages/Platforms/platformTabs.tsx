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

import { CurrentConditionsPage } from './currentConditions'
import { ForecastsPage } from './forecasts'
import { ObservationsPage } from './observations'
import { PlatformMatchParams } from './types';

const initialState = {
    moreDropdownOpen: false
}

type State = Readonly<typeof initialState>

export class PlatformTabs extends React.Component<RouteComponentProps, State> {
    public state: State = initialState

    constructor(props: RouteComponentProps) {
        super(props)

        this.moreToggle = this.moreToggle.bind(this)
    }

    public render() {
        const { id } = this.props.match.params as PlatformMatchParams

        const { path } = this.props.match

        return (
            <div>
                <Row>
                    <Col>
                        <PlatformLoader platformId={id}>
                            <Nav tabs={true}>

                            <ObservedDropdown platformId={id} />
                            <Tab to={paths.platforms.platform} path={path} name='Current Conditions' id={id} />
                            <Tab to={paths.platforms.forecast} path={path} name='Forecast' id={id} />

                            <Dropdown nav={true} isOpen={this.state.moreDropdownOpen} toggle={this.moreToggle}>
                                <DropdownToggle nav={true} caret={true}>More info</DropdownToggle>
                                
                                <DropdownMenu>
                                    <DropdownItem>All data from this station</DropdownItem>
                                    <DropdownItem>Compare stations</DropdownItem>
                                    <DropdownItem>Graphing and download</DropdownItem>
                                    <DropdownItem>12 hour history</DropdownItem>
                                    <DropdownItem>Station description</DropdownItem>
                                    <DropdownItem>Explanation of data types</DropdownItem>
                                    <DropdownItem divider={true} />
                                    <DropdownItem>Marine Forecast</DropdownItem>
                                    <DropdownItem>Tides</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            </Nav>
                        </PlatformLoader>
                    </Col>
                </Row>

                <Switch>
                    <Route path={paths.platforms.observations} component={ObservationsPage} />
                    <Route path={paths.platforms.forecast} component={ForecastsPage} />
                    <Route path={paths.platforms.platform} component={CurrentConditionsPage} />
                </Switch>
            </div>
        )
    }

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
