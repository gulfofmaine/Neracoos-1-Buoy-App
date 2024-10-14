import { Alert, AlertProps, Spinner } from "reactstrap"

export type LoadingAlertProps = Omit<AlertProps, "color">

export const LoadingAlert = ({ children, ...props }: LoadingAlertProps) => (
  <Alert color="light" {...props}>
    <span style={{ marginRight: "10px" }}>{children}</span>
    <Spinner size="sm" color="warning" />
  </Alert>
)
