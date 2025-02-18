import { Spinner } from "reactstrap"
import Alert, { AlertProps } from "react-bootstrap/Alert"

export type LoadingAlertProps = Omit<AlertProps, "color">

export const LoadingAlert = ({ children, ...props }: LoadingAlertProps) => (
  <Alert color="light" {...props}>
    <span style={{ marginRight: "10px" }}>{children}</span>
    <Spinner size="sm" color="warning" />
  </Alert>
)
