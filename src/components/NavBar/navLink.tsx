import { useRouter } from "next/router"
import Link from "next/link"
import React from "react"

export const NavLink = ({
  children,
  href,
  className = "nav-link",
}: {
  children: React.ReactNode
  href: string
  className: string
}) => {
  const router = useRouter()

  let routedClassName = className

  if (router) {
    if (router.asPath === href) {
      routedClassName = "active " + className
    }
  }

  return (
    <Link href={href} className={routedClassName}>
      {children}
    </Link>
  )
}
