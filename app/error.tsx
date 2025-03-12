"use client" // Error components must be Client Components
import * as Sentry from "@sentry/nextjs"
import Image from "next/image"
import { useEffect, useRef } from "react"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import n_walkabout from "./n_walkabout.png"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  let eventId = useRef("")

  useEffect(() => {
    eventId.current = Sentry.captureException(error)
  }, [error])

  return (
    <Row>
      <Col md={{ offset: 2, span: 8 }}>
        <h1>The data has escaped</h1>
        <Image src={n_walkabout} style={{ maxWidth: "100%", height: "auto" }} alt="Track of a lost buoy" />
        <p>Despite our best intentions, something has gone wrong while trying to display the data.</p>

        <p>
          If you saw a <b>It looks like we&apos;re having issues</b> form, we hope that you filled it out, as it will
          help us fix the issue. Otherwise you can email <a href="mailto:info@neracoos.org">info@neracoos.org</a> with
          information about the error, or try to launch the form.
        </p>

        <Button color="primary" onClick={() => Sentry.showReportDialog({ eventId: eventId.current })}>
          I&apos;ve got an idea what went wrong, please show me the form
        </Button>

        <p style={{ paddingTop: "1rem" }}>
          Sometimes issues are short lived, so if you give it a minute, then try reloading the page, hopefully you will
          be able to get to the data. If you can&apos;t and this error shows up again, please fill out the form, or
          email us for help.
        </p>

        <Button color="danger" onClick={() => reset()}>
          Try again
        </Button>
      </Col>
    </Row>
  )
}
