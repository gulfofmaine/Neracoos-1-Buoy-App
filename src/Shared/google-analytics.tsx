/**
 * Send Google analytics tracking info
 *
 * From https://github.com/react-ga/react-ga/issues/122#issuecomment-521781395
 */

export const GA_TRACKING_ID = process.env.NODE_ENV === "production" ? "UA-179432706-1" : undefined

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
