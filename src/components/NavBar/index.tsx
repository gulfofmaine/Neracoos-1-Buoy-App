"use client"
/**
 * Navbar component
 */
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

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
  // let isProd = false

  // if (typeof window !== "undefined") {
  //   isProd = window.location.href.includes("://mariners.neracoos.org")
  // }

  return (
    <div>
      <Navbar bg="primary" data-bs-theme="primary" expand="md">
        <Navbar.Brand href={paths.neracoos}>
          <Image src={neracoosLogo} alt="NERACOOS" height={30} />
        </Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            <NavLink href={paths.home}>Home</NavLink>

            <RegionDropdown closeParent={close} />
            {/* {!isProd && (
              <NavItem>
                <NavLink href={paths.models}>Model Viewer</NavLink>
              </NavItem>
            )} */}
            <Nav.Item>
              <NavLink href={paths.waterLevel.root}>Water Level</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink href={paths.about}>About</NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NeracoosNavBar
