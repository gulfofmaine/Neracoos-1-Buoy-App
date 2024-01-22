"use client"
import { useParams, usePathname } from "next/navigation"
import * as React from "react"
import { useEffect, useState } from "react"
import { useMeasure } from "react-use"
import { Col, Row } from "reactstrap"
import { ErddapMap } from "../../src/Features/ERDDAP/Map"

export default function Layout({
  children,
  sidebar,
  belowMap,
  bottom,
}: {
  children: React.ReactNode
  sidebar: React.ReactNode
  bottom: React.ReactNode
  belowMap: React.ReactNode
}) {
  const path = usePathname()
  const isPlatformView = path.startsWith("/platform")
  const params: { regionId?: string; platformId?: string } = useParams()
  let [ref, { height }] = useMeasure<HTMLDivElement>()
  const platformId = params.platformId
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (height < 420) {
    height = 420
  }

  //Removing warning in console re:Highcharts library defaultProps. Not an active warning for us--until this issues is solved on Highcharts' end, keep this to remove huge console error
  const error = console.error
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return
    error(...args)
  }

  return (
    <React.Fragment>
      <Row>
        <Col xs={{ size: "12", order: "2" }} md={{ size: "6", order: "2" }}>
          <div ref={ref} style={{ marginBottom: ".5rem" }}>
            {sidebar}
          </div>
        </Col>

        <Col xs={{ size: "12", order: `${isPlatformView ? "2" : "1"}` }} md={{ size: "6", order: "1" }}>
          <ErddapMap height={params.regionId ? "80vh" : height} {...(isPlatformView && { platformId })} />
          {belowMap ?? <React.Fragment>{belowMap}</React.Fragment>}
        </Col>
      </Row>

      {(isPlatformView && isClient && bottom) ?? <Row>{bottom}</Row>}
    </React.Fragment>
  )
}
