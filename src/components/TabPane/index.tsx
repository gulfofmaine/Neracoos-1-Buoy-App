import Nav from "react-bootstrap/Nav"

/** A tab component that does not change url but controls content within the tab pane
 *
 * @params: Name: for tab display; index: Indexing for key; setOpen: controlled state setting; active: set tab active if open
 *
 * @returns a controlled tab
 */
export const ContentTab = ({ name, index, setOpen, active }) => {
  return (
    <Nav.Item key={index} style={{ cursor: "pointer" }}>
      <Nav.Link key={index} onClick={() => setOpen(index)} active={active}>
        {name}
      </Nav.Link>
    </Nav.Item>
  )
}
