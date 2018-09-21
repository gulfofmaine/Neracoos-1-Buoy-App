import * as React from 'react'
import { Link } from 'react-router-dom'
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
        return (
            <div>
                <Navbar dark={true} expand="md">
                    <NavbarBrand tag={Link} to=""><img src="http://www.neracoos.org/sites/all/themes/bootstrap_neracoos/logo.png" /></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />

                    <Collapse isOpen={this.state.isOpen} navbar={true}>
                        <Nav className="ml-auto" navbar={true}>

                            <UncontrolledDropdown nav={true} inNavbar={true}>
                                <DropdownToggle nav={true} caret={true}>Regions</DropdownToggle>
                                <DropdownMenu right={true}>
                                    <DropdownItem><Link className="nav-link" to="">Gulf of Maine</Link></DropdownItem>
                                    <DropdownItem><Link className="nav-link" to="">Long Island Sound</Link></DropdownItem>
                                    <DropdownItem><Link className="nav-link" to="">Great Bay, NH</Link></DropdownItem>
                                    <DropdownItem><Link className="nav-link" to="">Boston Harbor</Link></DropdownItem>
                                    <DropdownItem><Link className="nav-link" to="">Cape Cod / Buzzards Bay</Link></DropdownItem>
                                    <DropdownItem><Link className="nav-link" to="">Narragansett Bay</Link></DropdownItem>
                                    <DropdownItem><Link className="nav-link" to="">Newfoundland, Canada</Link></DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <NavItem>
                                <Link className="nav-link" to="">Map</Link>
                            </NavItem>

                            <NavItem>
                                <Link className="nav-link" to="">About</Link>
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