"use client"
import React from "react"
import { Col, Row } from "reactstrap"
import { TableChart, TimeControl } from "./modeling"
import { StacCatalogRoot } from "./stac-catalog"
import { StacMap } from "./stac-map"

export default function ModelingIndexPage() {
  return (
          <>
            <Row>
              <Col md={3} style={{ padding: 0 }}>
                <StacCatalogRoot />
              </Col>
              <Col md={9} style={{ paddingLeft: 0 }}>
                <StacMap />
              </Col>
            </Row>
      
            <Row>
              <TimeControl />
              <TableChart />
            </Row>
          </>
        
    )
}