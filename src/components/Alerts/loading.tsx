import Alert, { AlertProps } from "react-bootstrap/Alert"
import Spinner from "react-bootstrap/Spinner"

export type LoadingAlertProps = Omit<AlertProps, "color">

export const LoadingAlert = ({ children, ...props }: LoadingAlertProps) => (
  <Alert variant="light" {...props}>
    <span style={{ marginRight: "10px" }}>{children}</span>
    <Spinner size="sm" variant="warning" />
  </Alert>
)
