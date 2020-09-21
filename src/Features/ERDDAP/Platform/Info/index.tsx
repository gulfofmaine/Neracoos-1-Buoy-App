/**
 * Platform info panel
 */
import { Geometry } from "@turf/helpers"
import * as React from "react"
import { Card, CardBody, CardText, CardTitle } from "reactstrap"

import { round } from "Shared/math"

import { UsePlatformRenderProps } from "../../hooks/BuoyBarnComponents"

/**
 * Platform info panel
 * @param platform
 */
export const ErddapPlatformInfoPanel: React.FunctionComponent<UsePlatformRenderProps> = ({ platform }) => (
  <Card>
    <CardBody>
      <CardTitle>Station {platform.id}</CardTitle>
      <CardText>
        {platform.properties.mooring_site_desc}
        <br />
        <b>Lat:</b> {round((platform.geometry as Geometry).coordinates[1] as number)} <b>Lon:</b>{" "}
        {round((platform.geometry as Geometry).coordinates[0] as number)}
        <br />
        {platform.properties.attribution.map((attr, key) => (
          <React.Fragment key={key}>
            <a href={attr.program.website}>{attr.attribution}</a>
            <br />
          </React.Fragment>
        ))}
      </CardText>
    </CardBody>
  </Card>
)
