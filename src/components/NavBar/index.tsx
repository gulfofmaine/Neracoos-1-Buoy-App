/**
 * Navbar component
 */
import * as React from "react"
import { Link, NavLink } from "react-router-dom"
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap"

import { paths } from "Shared/constants"

import { RegionDropdown } from "./regionDropdown"

import "./nav.css"

const initialState = {
  isOpen: false
}

type State = Readonly<typeof initialState>

/**
 * Navbar component
 */
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
          <NavbarBrand tag={Link} to={paths.home}>
            <img src="http://www.neracoos.org/sites/all/themes/bootstrap_neracoos/logo.png" alt="NERACOOS" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto" navbar={true}>
              <RegionDropdown />
              {/* 
              <NavItem>
                <NavLink className="nav-link" activeClassName="active" to={paths.map}>
                  Radar Map
                </NavLink>
              </NavItem> */}

              <NavItem>
                <NavLink className="nav-link" activeClassName="active" to={paths.about}>
                  About
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }

  /** Toggle the navbar open and closed when viewed on mobile. */
  private toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}
