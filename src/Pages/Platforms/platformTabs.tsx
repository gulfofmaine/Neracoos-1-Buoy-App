import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap'

import { paths } from '@app/constants'

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
        // tslint:disable-next-line:no-console
        console.log(this.props.match.params)

        const { path } = this.props.match

        return (
            <Nav tabs={true} style={{marginTop: '1rem'}}>
                <NavItem>
                    <NavLink active={ path === paths.platforms.observations }>Observations</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink active={ path === paths.platforms.platform }>Current Conditions</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink active={path === paths.platforms.forecast }>Forecast</NavLink>
                </NavItem>

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
        )
    }

    private moreToggle() {
        this.setState({
            moreDropdownOpen: !this.state.moreDropdownOpen
        })
    }
}