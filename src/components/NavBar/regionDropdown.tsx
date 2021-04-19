import * as React from "react"
import { NavLink } from "react-router-dom"
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap"

import { paths } from "Shared/constants"
import { regionList } from "Shared/regions"

interface Props {
  closeParent: () => void
}

const initialState = {
  dropdownOpen: false,
}

type State = Readonly<typeof initialState>

export class RegionDropdown extends React.Component<Props, State> {
  public state: State = initialState

  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.close = this.close.bind(this)
  }

  public render() {
    const regions = regionList.map((region, key) => {
      const to = paths.platforms.root + "?region=" + region.slug
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
    this.props.closeParent()
  }
}
