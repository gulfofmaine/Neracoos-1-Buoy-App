import React from "react"

export const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="card">{children}</div>
}

export const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="card-header">{children}</div>
}

export const CardBody = ({ children }: { children: React.ReactNode }) => {
  return <div className="card-body">{children}</div>
}
