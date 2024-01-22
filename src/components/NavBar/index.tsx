"use client"
/**
 * Navbar component
 */
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap"

import { paths } from "Shared/constants"

import { RegionDropdown } from "./regionDropdown"

import neracoosLogo from "./neracoos_logo.png"

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname()

  let isActive = false

  if (href === "/" && pathname === "/") {
    isActive = true
  } else if (href !== "/") {
    isActive = pathname.startsWith(href)
  }

  return (
    <Link href={href} className={"nav-link" + (isActive ? " active" : "")}>
      {children}
    </Link>
  )
}

/**
 * Navbar component
 */
const NeracoosNavBar = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false)

  const toggle = () => setOpen((open) => !open)
  const close = () => setOpen(false)

  let isProd = false

  if (typeof window !== "undefined") {
    isProd = window.location.href.includes("://mariners.neracoos.org")
  }

  return (
    <div>
      <Navbar dark={true} expand="md">
        <NavbarBrand href={paths.neracoos}>
          <Image src={neracoosLogo} alt="NERACOOS" height={30} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar={true} className="justify-content-end">
          <Nav className="ml-auto" navbar={true}>
            <NavLink href={paths.home}>Home</NavLink>

            <RegionDropdown closeParent={close} />
            {!isProd && (
              <NavItem>
                <NavLink href={paths.models}>Model Viewer</NavLink>
              </NavItem>
            )}
            {!isProd && (
              <NavItem>
                <NavLink href={paths.waterLevel.root}>Water Level</NavLink>
              </NavItem>
            )}
            <NavItem>
              <NavLink href={paths.about}>About</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NeracoosNavBar
