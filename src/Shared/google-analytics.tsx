/**
 * Send Google analytics tracking info
 *
 * From https://github.com/react-ga/react-ga/issues/122#issuecomment-521781395
 */

import React, { useEffect } from "react"
import ReactGA from "react-ga"
import { useLocation } from "react-router-dom"

interface Props {
  children: JSX.Element
  trackingId?: string
}

const GAListener: React.FC<Props> = ({ children, trackingId }: Props) => {
  const location = useLocation<{ pathname: string; search: string }>()

  useEffect(() => {
    if (trackingId) {
      ReactGA.initialize(trackingId)
      ReactGA.set({ page: location.pathname })
      ReactGA.pageview(`${location.pathname}${location.search}`)
    }
  }, [location, trackingId])

  return children
}

export default GAListener
