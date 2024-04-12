"use client"
/**
 * Send Google analytics tracking info
 *
 * From https://github.com/react-ga/react-ga/issues/122#issuecomment-521781395
 */

import React, { useEffect } from "react"
import ReactGA from "react-ga4"
import { usePathname } from "next/navigation"

interface Props {
  trackingId?: string
}

export function GAListener({ children, trackingId }: React.PropsWithChildren<Props>) {
  const path = usePathname()

  useEffect(() => {
    if (trackingId) {
      ReactGA.initialize(trackingId)
      ReactGA.send({ hitType: "pageview", page: `${path}` })
    }
  }, [path, trackingId])

  return children
}
