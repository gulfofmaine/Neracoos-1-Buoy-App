"use client"
import React from "react"
import { Col, Row } from "reactstrap"
import { STACProvider } from "./stac-queries"


export default function ModelingLayout({ children }: { children: React.ReactNode }) {
    return (
        <STACProvider >
            <Row>
                <Col>{children}</Col>
            </Row>
        </STACProvider>
    )
}
