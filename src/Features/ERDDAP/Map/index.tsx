"use client"
import "ol/ol.css"
/**
 * Map that shows all active platforms and can be focused on a specific bounding box.
 */
import { useRouter } from "next/navigation"
import GeoJSON from "ol/format/GeoJSON"
import { fromLonLat, transformExtent } from "ol/proj"
import * as React from "react"
import { Button } from "reactstrap"
import { RFeature, RLayerVector, RMap, RPopup, RStyle } from "rlayers"
import type { RView } from "rlayers/RMap"

import { useStatefulView } from "Features/StatefulMap"
import { colors } from "Shared/colors"
import { paths } from "Shared/constants"
import { BoundingBox, regionList } from "Shared/regions"
import { urlPartReplacer } from "Shared/urlParams"
import { EsriOceanBasemapLayer, EsriOceanReferenceLayer } from "components/Map"
import { useEffect, useState } from "react"

import { aDayAgoRounded } from "Shared/time"
import { useParams } from "next/navigation"
import { UsePlatforms } from "../hooks"
import { PlatformFeature } from "../types"

export interface Props {
  // Bounding box for fitting to a region
  boundingBox?: BoundingBox | null
  //  Platform to highlight
  platformId?: string
  // Height to adjust map to match sidebar
  height?: number | string
}

interface BaseProps extends Props {
  // Loaded platforms
  platforms: PlatformFeature[]
  // Stateful view to display
  view?: RView
  // Set stateful view
  setView: (view: RView) => void
}

/** If the window is narrower than 800px we should increase object sizes */
const adjustPxWidth = 800

interface PlatformLayerProps {
  platform: PlatformFeature
  // Is the platform currently selected
  selected: boolean
  // Is the platforms data outdated
  old: boolean
}

// Build a RLayers feature for each platform
const PlatformLayer = ({ platform, selected, old = false }: PlatformLayerProps) => {
  const router = useRouter()

  let radius: number
  if (selected) {
    radius = window.innerWidth > adjustPxWidth ? 10 : 15
  } else {
    radius = window.innerWidth > adjustPxWidth ? 5 : 10
  }
  const opacity = selected ? "cc" : "7a"

  const url = urlPartReplacer(paths.platforms.platform, ":id", platform.id)

  const fillColor = old ? "grey" : `#cf5c00${opacity}`
  const strokeColor = old ? "grey" : colors.whatOrange

  return (
    <RLayerVector>
      <RStyle.RStyle>
        <RStyle.RCircle radius={radius}>
          <RStyle.RFill color={fillColor} />
          <RStyle.RStroke color={strokeColor} width={1.5} />
        </RStyle.RCircle>
      </RStyle.RStyle>
      <RFeature
        geometry={React.useMemo(() => {
          const feature = new GeoJSON({
            dataProjection: "EPSG:4326",
            featureProjection: "EPSG:3857",
          }).readFeature(platform)
          return feature.getGeometry()
        }, [platform])}
        onClick={React.useCallback(() => {
          router.push(url)
        }, [router, url])}
      >
        <RPopup trigger={"hover"}>
          <Button
            color="dark"
            size="sm"
            onClick={React.useCallback(() => {
              router.push(url)
            }, [router, url])}
          >
            {platform.id}
          </Button>
        </RPopup>
      </RFeature>
    </RLayerVector>
  )
}

// Initial view to display if one is not otherwise set
const initial = { center: fromLonLat([-68.5, 43.5]), zoom: 6 }

export const ErddapMapBase: React.FC<BaseProps> = ({ platforms, platformId, height, view, setView }: BaseProps) => {
  const mapRef = React.useRef<RMap>(null)
  const params: { regionId?: string } = useParams()
  const [boundingBox, setBoundingBox] = useState<BoundingBox | null>()

  //If params change, set bounding box
  useEffect(() => {
    if (typeof params.regionId !== "undefined") {
      const regionId = decodeURIComponent(params.regionId)
      const region = regionList.find((r) => r.slug === regionId)
      setBoundingBox(region?.bbox)
    }
    if (typeof params.regionId === "undefined") {
      setView(initial)
    }
  }, [params.regionId, setView, setBoundingBox])

  // When the bounding box gets set, zoom to the region
  useEffect(() => {
    if (boundingBox) {
      const { north, south, east, west } = boundingBox
      const extent = transformExtent([west, south, east, north], "EPSG:4326", "EPSG:3857")

      mapRef?.current?.ol.getView().fit(extent)
    }
  }, [boundingBox, platforms])

  // Make sure the height of the map gets updated when jumping
  // from home to platform view
  React.useLayoutEffect(() => {
    mapRef?.current?.ol.updateSize()
  }, [height])

  const { oldPlatforms, filteredPlatforms, selectedPlatforms } = filterPlatforms(platforms, platformId)

  return (
    <RMap ref={mapRef} className="map" initial={initial} view={[view ?? initial, setView]} height={height}>
      <EsriOceanBasemapLayer />
      <EsriOceanReferenceLayer />

      {oldPlatforms.map((p) => (
        <PlatformLayer key={p.id} platform={p} selected={false} old={true} />
      ))}
      {filteredPlatforms.map((p) => (
        <PlatformLayer key={p.id} platform={p} selected={false} old={false} />
      ))}
      {selectedPlatforms.map((p) => (
        <PlatformLayer key={p.id} platform={p} selected={true} old={false} />
      ))}
    </RMap>
  )
}

/**
 * Map that is focused on the Gulf of Maine with the selected platform highlighted
 */
export const ErddapMap: React.FC<Props> = ({ platformId, boundingBox, height }: Props) => {
  const [view, handleSetView] = useStatefulView()

  return (
    <UsePlatforms>
      {({ platforms }) => (
        <ErddapMapBase
          platforms={platforms}
          view={view}
          setView={handleSetView}
          platformId={platformId}
          height={height}
        />
      )}
    </UsePlatforms>
  )
}

/**
 * Filters the platforms by selected platform, and if the data is stale or not
 *
 * @param platforms Loaded platforms
 * @param platformId Currently selected platform
 * @returns old, filtered, and selected platform
 */
function filterPlatforms(platforms: PlatformFeature[], platformId: string | undefined) {
  const aDayAgo = aDayAgoRounded()

  const oldPlatforms: PlatformFeature[] = []
  const filteredPlatforms: PlatformFeature[] = []
  const selectedPlatforms: PlatformFeature[] = []

  platforms.forEach((platform: PlatformFeature) => {
    if (platform.id === platformId) {
      selectedPlatforms.push(platform)
    } else if (platform.properties.readings.some((r) => r.time && r.time !== null && aDayAgo < new Date(r.time))) {
      filteredPlatforms.push(platform)
    } else {
      oldPlatforms.push(platform)
    }
  })
  return { oldPlatforms, filteredPlatforms, selectedPlatforms }
}
