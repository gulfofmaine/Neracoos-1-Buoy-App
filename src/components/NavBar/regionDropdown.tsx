import Link from "next/link"
import { useRouter } from "next/router"
import * as React from "react"
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap"

import { PATHS } from "Shared/constants"
import { regionList } from "Shared/regions"

const initialState = {
  dropdownOpen: false,
}

type State = Readonly<typeof initialState>

export class RegionDropdown extends React.Component<object, State> {
  public state: State = initialState

  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.close = this.close.bind(this)
  }

  public render() {
    const regions = regionList.map((region, key) => {
      const to = PATHS.platforms.root + "?region=" + region.slug
      return (
        <NavLink key={key} className="nav-link dropdown-item btn" activeClassName="" to={to} onClick={this.close}>
          {region.name}
        </NavLink>
      )
    })

    return (
      <Dropdown nav={true} inNavbar={true} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav={true} caret={true}>
          Regions
        </DropdownToggle>

        <DropdownMenu right={true}>{regions}</DropdownMenu>
      </Dropdown>
    )
  }

  private toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    })
  }

  private close() {
    this.setState({
      dropdownOpen: false,
    })
  }
}

interface NavLinkProps {
  to: string
  className: string
  activeClassName: string
  onClick: () => void
}

const NavLink: React.FunctionComponent<NavLinkProps> = ({ to, className, activeClassName, children, onClick }) => {
  const { pathname } = useRouter()

  return (
    <Link href={to}>
      <a className={className + (to === pathname ? " " + activeClassName : "")} onClick={onClick}>
        {children}
      </a>
    </Link>
  )
}
