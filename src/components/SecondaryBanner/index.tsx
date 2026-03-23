import Alert from "react-bootstrap/Alert"

export const SecondaryBanner = ({ children }) => {
  return <Alert className="secondary-alert d-flex justify-content-center p-1 rounded-0 min-wh-100">{children}</Alert>
}
