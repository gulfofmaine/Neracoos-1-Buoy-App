import Alert from "react-bootstrap/Alert"

export const SecondaryBanner = ({ children }) => {
  return (
    <Alert variant="secondary" className="d-flex justify-content-center p-1 rounded-0">
      {children}
    </Alert>
  )
}
