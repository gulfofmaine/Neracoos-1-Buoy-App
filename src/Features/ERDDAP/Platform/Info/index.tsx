/**
 * Platform info panel
 */
import type { Point } from "geojson"
import * as React from "react"
import Card from "react-bootstrap/Card"

import { round } from "Shared/math"

import { UsePlatformRenderProps } from "../../hooks/BuoyBarnComponents"
import { platformName } from "../../utils/platformName"

/**
 * Platform info panel
 * @param platform
 */
export const ErddapPlatformInfoPanel: React.FunctionComponent<UsePlatformRenderProps> = ({ platform }) => {
  const nbdc_site_id = platform.properties.ndbc_site_id ? platform.properties.ndbc_site_id : ""
  return (
    <Card role="complementary">
      <Card.Body>
        <Card.Title role="header">Station {platformName(platform)}</Card.Title>
        <Card.Text>
          {platform.properties.mooring_site_desc}
          <br />
          {nbdc_site_id ? (
            <React.Fragment>
              <b>NDBC ID:</b> {nbdc_site_id}
              <br />
            </React.Fragment>
          ) : null}
          <b>Lat:</b> {round((platform.geometry as Point).coordinates[1] as number)} <b>Lon:</b>{" "}
          {round((platform.geometry as Point).coordinates[0] as number)}
          <br />
          {platform.properties.attribution.map((attr, key) => (
            <React.Fragment key={key}>
              <a href={attr.program.website}>{attr.attribution}</a>
              <br />
            </React.Fragment>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
