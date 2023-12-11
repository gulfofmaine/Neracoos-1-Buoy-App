"use client"
import "ol/ol.css"
/**
 * Map that shows all active platforms and can be focused on a specific bounding box.
 */
import { usePathname, useRouter } from "next/navigation"

import GeoJSON from "ol/format/GeoJSON"
import { fromLonLat, transformExtent } from "ol/proj"
import { Button } from "reactstrap"
import { RFeature, RLayerVector, RMap, RPopup, RStyle } from "rlayers"

import { colors } from "Shared/colors"
import { paths } from "Shared/constants"
import { BoundingBox, InitialRegion, regionList } from "Shared/regions"
import { urlPartReplacer } from "Shared/urlParams"
import { EsriOceanBasemapLayer, EsriOceanReferenceLayer } from "components/Map"
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"

import { aDayAgoRounded } from "Shared/time"
import { useParams } from "next/navigation"
import { usePlatforms } from "../hooks"
import { PlatformFeature } from "../types"

export interface Props {
  // Bounding box for fitting to a region
  boundingBox?: BoundingBox | null
  //  Platform to highlight
  platformId?: string
  // Height to adjust map to match sidebar
  height?: number | string
  // Already filtered platforms
  platforms?: PlatformFeature[]
}

export interface BaseProps extends Props {
  // Loaded platforms
  platforms: PlatformFeature[]
}

export interface View {
  center: number[]
  zoom: number
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
export const PlatformLayer = ({ platform, selected, old = false }: PlatformLayerProps) => {
  const router = useRouter()
  const path = usePathname()
  const waterLevelSensorPage = path.includes("platform")

  let radius: number
  if (selected) {
    radius = window.innerWidth > adjustPxWidth ? 10 : 15
  } else {
    radius = window.innerWidth > adjustPxWidth ? 5 : 10
  }
  const opacity = selected ? "cc" : "7a"

  const url = urlPartReplacer(
    waterLevelSensorPage ? paths.platforms.platform : paths.waterLevel.sensor,
    ":id",
    platform.id,
  )

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
        geometry={useMemo(() => {
          const feature = new GeoJSON({
            dataProjection: "EPSG:4326",
            featureProjection: "EPSG:3857",
          }).readFeature(platform)
          return feature.getGeometry()
        }, [platform])}
        onClick={useCallback(() => {
          router.push(url)
        }, [router, url])}
      >
        <RPopup trigger={"hover"}>
          <Button
            color="dark"
            size="sm"
            onClick={useCallback(() => {
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

export const ErddapMapBase: React.FC<BaseProps> = ({ platforms, platformId, height }: BaseProps) => {
  const mapRef = useRef<RMap>(null)
  const params: { regionId?: string; platformId?: string } = useParams()
  const [view, setView] = useState<View>(initial)
  const path = usePathname()

  // Check if the route was navigated to using the back button
  // const isBackButtonUsed = router.asPath !== router.pathname;

  //If params change, set bounding box, then setView to align with map state
  //setView not in deps to avoid rerenders when user zooms
  useEffect(() => {
    if (typeof params.regionId !== "undefined") {
      const regionId = decodeURIComponent(params.regionId)
      const region = regionList.find((r) => r.slug === regionId)
      getView(region)
    }
    if (path === "/") {
      const region = InitialRegion
      getView(region)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, platforms])

  const getView = (region) => {
    const boundingBox = region?.bbox
    if (boundingBox) {
      const { north, south, east, west } = boundingBox
      const extent = transformExtent([west, south, east, north], "EPSG:4326", "EPSG:3857")
      mapRef?.current?.ol.getView().fit(extent)
      const center = mapRef?.current?.ol.getView().getState().center
      const zoom = mapRef?.current?.ol.getView().getState().zoom
      center && zoom ? setView({ center, zoom }) : setView(initial)
    }
  }

  // Make sure the height of the map gets updated when jumping
  // from home to platform view
  useLayoutEffect(() => {
    mapRef?.current?.ol.updateSize()
  }, [height])

  const { oldPlatforms, filteredPlatforms, selectedPlatforms } = filterPlatforms(platforms, platformId)

  return (
    <RMap ref={mapRef} className="map" initial={initial} view={[view || initial, setView]} height={height}>
      <EsriOceanBasemapLayer />
      <EsriOceanReferenceLayer />

      {oldPlatforms.map((p) => (
        <PlatformLayer key={p.id} platform={p} selected={false} old={true} />
      ))}
      {filteredPlatforms.map((p) => (
        <PlatformLayer key={p.id} platform={p} selected={false} old={false} />
      ))}
      {!!selectedPlatforms.length && (
        <PlatformLayer key={selectedPlatforms[0].id} platform={selectedPlatforms[0]} selected={true} old={false} />
      )}
    </RMap>
  )
}

/**
 * Map that is focused on the Gulf of Maine with the selected platform highlighted
 */
export const ErddapMap: React.FC<Props> = ({ platformId, height, platforms }: Props) => {
  const { isLoading, data } = usePlatforms()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (data?.features && isClient) {
    return <ErddapMapBase platforms={platforms ?? data?.features} platformId={platformId} height={height} />
  }
  return null
}

/**
 * Filters the platforms by selected platform, and if the data is stale or not
 *
 * @param platforms Loaded platforms
 * @param platformId Currently selected platform
 * @returns old, filtered, and selected platform
 */
export function filterPlatforms(platforms: PlatformFeature[], platformId: string | undefined) {
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
