import * as React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { 
    Collapse, 
    DropdownItem, 
    DropdownMenu, 
    DropdownToggle, 
    Nav, 
    Navbar, 
    NavbarBrand, 
    NavbarToggler, 
    NavItem, 
    UncontrolledDropdown 
} from 'reactstrap'

import { paths } from '@app/constants'
import { regionList } from '@app/Shared/regions';

import './nav.css'

const initialState = {
    isOpen: true
}

type State = Readonly<typeof initialState>


export default class NeracoosNavBar extends React.Component<object, State> {
    public state: State = initialState

    constructor(props: any) {
        super(props)

        this.toggle = this.toggle.bind(this)
    }

    public render() {
        const regions = regionList.map((region, key) => {
            const to = paths.platforms.root + '?region=' + region.slug
            return (
                <DropdownItem key={key}><NavLink className='nav-link' activeClassName='active' to={ to }>{ region.name }</NavLink></DropdownItem>
            )
        })

        return (
            <div>
                <Navbar dark={true} expand="md">
                    <NavbarBrand tag={Link} to={paths.home}><img src="http://www.neracoos.org/sites/all/themes/bootstrap_neracoos/logo.png" /></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />

                    <Collapse isOpen={this.state.isOpen} navbar={true}>
                        <Nav className="ml-auto" navbar={true}>

                            <UncontrolledDropdown nav={true} inNavbar={true}>
                                <DropdownToggle nav={true} caret={true}>Regions</DropdownToggle>
                                <DropdownMenu right={true}>
                                    { regions }
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <NavItem>
                                <NavLink className="nav-link" activeClassName='active' to={paths.map}>Map</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" activeClassName='active' to={paths.about}>About</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }

    private toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}