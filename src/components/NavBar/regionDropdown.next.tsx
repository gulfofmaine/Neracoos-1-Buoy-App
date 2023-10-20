"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import * as React from "react"
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap"

import { paths } from "Shared/constants"
import { regionList } from "Shared/regions"

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => {
  const pathname = usePathname()

  const isActive = pathname.startsWith(href)

  return (
    <Link
      href={href}
      className={isActive ? "nav-link dropdown-item btn" : "nav-link dropdown-item btn"}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

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
        <NavLink key={key} href={to} onClick={this.close}>
          {region.name}
        </NavLink>
      )
    })

    return (
      <Dropdown nav={true} inNavbar={true} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav={true} caret={true}>
          Regions
        </DropdownToggle>

        <DropdownMenu end={true}>{regions}</DropdownMenu>
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
