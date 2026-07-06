import Alert from "react-bootstrap/Alert"

export const SecondaryBanner = ({ children, variant = "secondary" }) => {
  return (
    <Alert
      variant={variant}
      style={{ padding: "5px", marginRight: "-12px", marginLeft: "-12px", marginTop: "-16px", borderRadius: 0 }}
    >
      {children}
    </Alert>
  )
}
