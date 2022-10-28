"use client"
/**
 * Navbar component
 */
import React, { useState } from "react"
import { NavLink } from "./navLink"
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap"

import { paths } from "Shared/constants"

import { RegionDropdown } from "./regionDropdown"

import neracoosLogo from "./neracoos_logo.png"

/**
 * Navbar component
 */
const NeracoosNavBar = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const toggle = () => setOpen((open) => !open)
  const close = () => setOpen(false)

  const isMariners = window.location.href.includes("://mariners.neracoos.org")

  return (
    <div>
      <Navbar dark={true} expand="md">
        <NavbarBrand href={paths.neracoos}>
          <img src={neracoosLogo} alt="NERACOOS" />
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
