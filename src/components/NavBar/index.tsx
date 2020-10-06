/**
 * Navbar component
 */
import Link from "next/link"
import { useRouter } from "next/router"
import * as React from "react"
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap"

import { PATHS } from "Shared/constants"

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
  }

  public render() {
    return (
      <div className="neracoos-nav">
        <Navbar dark={true} expand="md">
          <Link href={"/"} passHref={true}>
            <NavbarBrand>
              <img src={neracoosLogo} alt="NERACOOS" />
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto" navbar={true}>
              <NavLink className="nav-link" activeClassName="active" to={PATHS.home}>
                Home
              </NavLink>

              <RegionDropdown />

              <NavItem>
                <NavLink className="nav-link" activeClassName="active" to={PATHS.about}>
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
}

interface NavLinkProps {
  to: string
  className: string
  activeClassName: string
}

const NavLink: React.FunctionComponent<NavLinkProps> = ({ to, className, activeClassName, children }) => {
  const { pathname } = useRouter()

  return (
    <Link href={to}>
      <a className={className + (to === pathname ? " " + activeClassName : "")}>{children}</a>
    </Link>
  )
}
