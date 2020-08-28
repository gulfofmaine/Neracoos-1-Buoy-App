/**
 * Send Google analytics tracking info
 *
 * From https://github.com/react-ga/react-ga/issues/122#issuecomment-521781395
 */

import { useEffect } from "react"
import ReactGA from "react-ga"
import { RouteComponentProps, withRouter } from "react-router-dom"
import { Location, LocationListener, UnregisterCallback } from "history"

const sendPageView: LocationListener = (location: Location): void => {
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
}

interface Props extends RouteComponentProps {
  children: JSX.Element
  trackingId?: string
}

const GAListener = ({ children, trackingId, history }: Props): JSX.Element => {
  useEffect((): UnregisterCallback | void => {
    if (trackingId) {
      ReactGA.initialize(trackingId)
      sendPageView(history.location, "REPLACE")
      return history.listen(sendPageView)
    }
  }, [history, trackingId])

  return children
}

export default withRouter(GAListener)
