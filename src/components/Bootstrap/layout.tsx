import React from "react"

export const Container = ({
  fluid = false,
  className = "",
  children,
}: {
  fluid: boolean
  className: string
  children: React.ReactNode
}) => {
  let classes = className

  if (fluid) {
    classes += "container-fluid"
  } else {
    classes += " container"
  }

  return <div className={classes}>{children}</div>
}

export const rowColWidths = ["xs", "sm", "md", "lg", "xl", "xxl"]

export const Row = ({ className = "row", children, ...props }: { className: string; children: React.ReactNode }) => {
  let classes = className

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

type sizeProps =
  | undefined
  | number
  | {
      size?: number | boolean
      order?: number
    }

export const Col = ({
  className = "",
  children,
  ...props
}: {
  xs: sizeProps
  sm: sizeProps
  md: sizeProps
  lg: sizeProps
  xl: sizeProps
  xxl: sizeProps
  className: string
  children: React.ReactNode
}) => {
  let classes = className
  let modifiedProps = props

  rowColWidths.forEach((width, index) => {
    let size: sizeProps = modifiedProps[width]

    delete modifiedProps[width]

    let classWidth = width === "xs" ? "" : `-${width}`

    if (size) {
      if (typeof size === "object") {
        if (size.size) {
          if (typeof size.size === "boolean") {
            classes += ` col${classWidth}`
          } else {
            classes += ` col${classWidth}-${size}`
          }
        }

        if (size.order) {
          classes += ` order${classWidth}-${size.order}`
        }
      } else {
        classes += ` col${classWidth}-${size}`
      }
    }
  })

  return (
    <div className={classes} {...modifiedProps}>
      {children}
    </div>
  )
}
