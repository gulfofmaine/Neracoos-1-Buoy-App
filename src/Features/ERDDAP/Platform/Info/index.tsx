/**
 * Platform info panel
 */
import type { Point } from "geojson"
import * as React from "react"
import Card from "react-bootstrap/Card"

import { round } from "Shared/math"

import { UsePlatformRenderProps } from "../../hooks/BuoyBarnComponents"
import { platformId } from "../../utils/platformName"
import { LocationPinIcon } from "Shared/icons/iconsMap"

/**
 * Platform info panel
 * @param platform
 */
export const ErddapPlatformInfoPanel: React.FunctionComponent<UsePlatformRenderProps> = ({ platform }) => {
  const nbdc_site_id = platform.properties.ndbc_site_id ? platform.properties.ndbc_site_id : ""
  return (
    <Card className="p-2" role="complementary">
      <Card.Body className="p-0">
        {nbdc_site_id && <p className="m-0 text-black-65">Station {nbdc_site_id}</p>}
        <h2 role="header" className="text-primary pb-3">
          {platformId(platform)}
        </h2>
        <Card.Text className="d-flex flex-column gap-1">
          {nbdc_site_id && (
            <span className="d-flex flex-row gap-2 align-items-baseline">
              <h3 className="text-primary m-0">NDBC ID</h3> <p className="text-black-65 m-0">{nbdc_site_id}</p>
            </span>
          )}
          {/* Mimics h3 without messing up the html structure */}
          <span className="text-primary h3-mimic">{platform.properties.mooring_site_desc}</span>

          <span className="d-flex flex-row gap-2 pb-5 align-items-baseline">
            <LocationPinIcon className="text-primary" />
            <span className="text-primary h3-mimic">
              {round((platform.geometry as Point).coordinates[1] as number)}
            </span>
            <span className="text-black-65">Lat</span>
            <span className="text-primary h3-mimic">
              {round((platform.geometry as Point).coordinates[0] as number)}
            </span>
            <span className="text-black-65 m-0">Lon</span>
          </span>

          {platform.properties.attribution.map((attr, key) => (
            <span className="mt-auto" key={key}>
              <a href={attr.program.website}>{attr.attribution}</a>
            </span>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
