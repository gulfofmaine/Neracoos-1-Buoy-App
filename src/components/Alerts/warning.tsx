import { Alert, AlertProps } from "reactstrap"

export type WarningAlertProps = Omit<AlertProps, "color">
export const WarningAlert = ({ children, ...props }: WarningAlertProps) => (
  <Alert color="warning" {...props}>
    {children}
  </Alert>
)
