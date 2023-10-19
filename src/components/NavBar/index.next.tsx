"use client"
/**
 * Navbar component
 */
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"
import React, { useState } from "react"
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap"

import { paths } from "Shared/constants"

import { RegionDropdown } from "./regionDropdown.next"

import neracoosLogo from "./neracoos_logo.png"

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname()

  const isActive = pathname.startsWith(href)

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
  const [isOpen, setOpen] = useState<boolean>(false)

  const toggle = () => setOpen((open) => !open)
  const close = () => setOpen(false)

  let isMariners = false

  if (typeof window !== "undefined") {
    isMariners = window.location.href.includes("://mariners.neracoos.org")
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

            {!isMariners ? (
              <NavItem>
                <NavLink href={paths.models}>Model Viewer</NavLink>
              </NavItem>
            ) : null}

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
