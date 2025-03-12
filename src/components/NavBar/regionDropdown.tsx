"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"
import NavDropdown from "react-bootstrap/NavDropdown"

import { paths } from "Shared/constants"
import { regionList } from "Shared/regions"
import { urlPartReplacer } from "Shared/urlParams"

export const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string
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
        <NavDropdown.Item key={key} as={NavLink} href={to}>
          {region.name}
        </NavDropdown.Item>
      )
    })

    return (
      <NavDropdown title="Regions" id="region-dropdown">
        {regions}
      </NavDropdown>
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
