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
import { Container } from "react-bootstrap"

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
  return (
    <div>
      <Navbar data-bs-theme="dark" className="bg-primary mb-4 dark-nav-custom" expand="md">
        <Container fluid className="mx-5 mx-md-10 px-0">
          <Navbar.Brand href={paths.home}>
            <div className="d-flex flex-column flex-md-row align-items-md-center gap-2 gap-md-4">
              <Image src={neracoosLogo} alt="NERACOOS" height={30} width={209} />
              <p className="m-0 text-white">Mariners' Dashboard</p>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <RegionDropdown closeParent={close} />
              <Nav.Item>
                <NavLink href={paths.waterLevel.root}>Water Level</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink href={paths.about}>About</NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NeracoosNavBar
