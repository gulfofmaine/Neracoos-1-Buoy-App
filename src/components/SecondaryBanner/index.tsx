import Alert from "react-bootstrap/Alert"

export const SecondaryBanner = ({ children }) => {
  return (
    <Alert
      variant="secondary"
      style={{ padding: "5px", marginRight: "-12px", marginLeft: "-12px", marginTop: "-16px", borderRadius: 0 }}
    >
      {children}
    </Alert>
  )
}
