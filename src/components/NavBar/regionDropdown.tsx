"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap"

import { paths } from "Shared/constants"
import { regionList } from "Shared/regions"
import { urlPartReplacer } from "Shared/urlParams"

export const NavLink = ({
  href,
  prefetch,
  children,
  onClick,
}: {
  href: string
  prefetch?: boolean
  children: React.ReactNode
  onClick: () => void
}) => {
  const pathname = usePathname()

  const isActive = pathname.startsWith(href)

  return (
    <Link
      href={href}
      className={isActive ? "nav-link dropdown-item btn" : "nav-link dropdown-item btn"}
      onClick={onClick}
      prefetch={prefetch === false ? prefetch : true}
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
      const to = urlPartReplacer(paths.regions.region, ":id", region.slug)
      return (
        <NavLink key={key} href={to} onClick={this.close} prefetch={true}>
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
