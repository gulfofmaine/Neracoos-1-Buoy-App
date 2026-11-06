import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import n_walkabout from "./n_walkabout.png"

export const metadata: Metadata = {
  title: "Page not found",
}

export default function NotFound() {
  return (
    <Row>
      <Col md={{ offset: 2, span: 8 }}>
        <h1>This page has drifted away</h1>
        <Image src={n_walkabout} style={{ maxWidth: "100%", height: "auto" }} alt="Track of a lost buoy" />
        <p>We couldn&apos;t find the page or platform you were looking for. It may have been moved or retired.</p>

        <p>
          Head back to the <Link href="/">map of platforms</Link> to find what you&apos;re looking for, or email{" "}
          <a href="mailto:info@neracoos.org">info@neracoos.org</a> if you think something should be here.
        </p>
      </Col>
    </Row>
  )
}
