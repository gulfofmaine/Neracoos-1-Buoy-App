/**
 * Navbar component
 */
import React from "react"
import { NavLink } from "react-router-dom"
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap"

import { paths } from "Shared/constants"

import { RegionDropdown } from "./regionDropdown"

import neracoosLogo from "./neracoos_logo.png"

const initialState = {
  isOpen: false,
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
    this.close = this.close.bind(this)
  }

  public render() {
    return (
      <div>
        <Navbar dark={true} expand="md">
          <NavbarBrand href={paths.neracoos}>
            <img src={neracoosLogo} alt="NERACOOS" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar={true} className="justify-content-end">
            <Nav className="ml-auto" navbar={true}>
              <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to={paths.home}>
                Home
              </NavLink>

              <RegionDropdown closeParent={this.close} />

              <NavItem>
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to={paths.about}>
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
      isOpen: !this.state.isOpen,
    })
  }

  private close() {
    this.setState({
      isOpen: false,
    })
  }
}
