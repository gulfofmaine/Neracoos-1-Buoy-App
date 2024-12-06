import { NavItem, NavLink } from "reactstrap"

/** A tab component that does not change url but controls content within the tab pane
 *
 * @params: Name: for tab display; index: Indexing for key; setOpen: controlled state setting; active: set tab active if open
 *
 * @returns a controlled tab
 */
export const ContentTab = ({ name, key, setOpen, active }) => {
  return (
    <NavItem key={key} style={{ cursor: "pointer" }}>
      <NavLink key={key} onClick={() => setOpen(key)} active={active}>
        {name}
      </NavLink>
    </NavItem>
  )
}
