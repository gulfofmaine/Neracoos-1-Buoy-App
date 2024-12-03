"use client"
import "ol/ol.css"
/**
 * Map that shows all active platforms and can be focused on a specific bounding box.
 */
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next-nprogress-bar"

import GeoJSON from "ol/format/GeoJSON"
import { fromLonLat, transformExtent } from "ol/proj"
import { RFeature, RLayerVector, RMap, RPopup, RStyle } from "rlayers"

import { BoundingBox, InitialRegion, regionList } from "Shared/regions"
import { EsriOceanBasemapLayer, EsriOceanReferenceLayer } from "components/Map"
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"

import { aDayAgoRounded } from "Shared/time"
import { buildSearchParamsQuery } from "Shared/urlParams"
import { useParams } from "next/navigation"
import { usePlatforms } from "../hooks"
import { DatumOffsetOptions, FloodLevels, PlatformFeature } from "../types"
import {
  floodLevelThresholdColors,
  getSurpassedThreshold,
  getWaterLevelThresholdsMapRawComp,
} from "../utils/waterLevelThresholds"
import { PlatformLayer } from "."
import { platformName } from "../utils/platformName"
import Link from "next/link"
import { Feature } from "ol"
import { RStyleArray } from "rlayers/style"
import { WATER_LEVEL_STANDARDS } from "Shared/constants/standards"

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
export const WLPlatformLayer = ({ platform, selected, old = false }: PlatformLayerProps) => {
  const router = useRouter()
  const path = usePathname()
  const searchParams = useSearchParams()
  const [floodThreshold, setFloodThreshold] = useState<string>("")
  const [predictedFloodThreshold, setPredictedFloodThreshold] = useState<string>("")
  const [display, setDisplay] = useState("grey")
  const [predictedDisplay, setPredictedDisplay] = useState("gray")
  let radius: number
  if (selected) {
    radius = window.innerWidth > adjustPxWidth ? 16 : 21
  } else {
    radius = window.innerWidth > adjustPxWidth ? 10 : 15
  }
  const isSensorPage = path.includes("sensor")

  const getObservedWaterDisplay = (currentWaterLevel, floodLevels) => {
    const highestValue = currentWaterLevel?.extrema_values?.max.value
    const waterLevelThresholds = getWaterLevelThresholdsMapRawComp(floodLevels)
    const surpassedThreshold = getSurpassedThreshold(highestValue, waterLevelThresholds)
    setFloodThreshold(surpassedThreshold)
    const opacity = selected ? "e6" : "a0"
    const display = floodLevelThresholdColors(surpassedThreshold, old, opacity, platform)
    setDisplay(display)
  }

  const getPredictedWaterDisplay = (predictedWaterLevel, floodLevels) => {
    //Get highest value of predicted and any forecasts
    const highValue = Math.max(...predictedWaterLevel.map((p) => p.extrema_values.max?.value))
    const predWaterLevelThresholds = floodLevels && getWaterLevelThresholdsMapRawComp(floodLevels)
    const surpassedThreshold = getSurpassedThreshold(highValue, predWaterLevelThresholds)
    setPredictedFloodThreshold(surpassedThreshold)
    const opacity = selected ? "e6" : "a0"
    const display = floodLevelThresholdColors(surpassedThreshold, old, opacity, platform)
    setPredictedDisplay(display)
  }
  useEffect(() => {
    const currentWaterLevel = platform.properties.readings.find((r) => {
      return WATER_LEVEL_STANDARDS.includes(r.data_type.standard_name) && r.type === "Observation"
    })
    const floodLevels = currentWaterLevel?.flood_levels
    if (!currentWaterLevel) {
      setFloodThreshold("NA")
    } else {
      getObservedWaterDisplay(currentWaterLevel, floodLevels)
    }
    const futureWaterLevel = platform.properties.readings.filter(
      (r) => r.type === "Prediction" || r.type === "Forecast",
    )
    if (!futureWaterLevel) {
      setPredictedFloodThreshold("NA")
    } else if (futureWaterLevel && floodLevels) {
      platform.id === "CASM1" && floodLevels
      getPredictedWaterDisplay(futureWaterLevel, floodLevels)
    }
  }, [platform.properties.readings, selected, old, platform])

  return (
    <div style={{ zIndex: 10 }}>
      {platform && display && (
        <Layer
          platform={platform}
          url={
            isSensorPage && searchParams.get("datum")
              ? {
                  pathname: `/water-level/sensor/${platform.id}`,
                  query: buildSearchParamsQuery(
                    searchParams.get("start") as string,
                    searchParams.get("end") as string,
                    searchParams.get("datum") as DatumOffsetOptions,
                  ),
                }
              : `/water-level/sensor/${platform.id}`
          }
          router={router}
          radius={radius}
          color={display}
          predColor={predictedDisplay}
          floodThreshold={floodThreshold}
          predFloodThreshold={predictedFloodThreshold}
        />
      )}
    </div>
  )
}

const Layer = ({ platform, url, router, radius, color, floodThreshold, predColor, predFloodThreshold }) => {
  const [key, setKey] = useState(0)

  useEffect(() => {
    setKey((prevKey) => prevKey + 1) // Increment key on state change
  }, [color])
  return (
    <RLayerVector zIndex={10} key={key}>
      {color && (
        <RStyleArray>
          <RStyle.RStyle zIndex={20}>
            <RStyle.RRegularShape radius={radius} points={4} angle={2.35}>
              <RStyle.RFill color={predColor ? predColor : "grey"} />
              <RStyle.RStroke color={"000000"} width={0.5} />
            </RStyle.RRegularShape>
          </RStyle.RStyle>

          <RStyle.RStyle zIndex={25}>
            <RStyle.RRegularShape radius={radius / 2.5} points={40} angle={0}>
              <RStyle.RFill color={color ? color : "grey"} />
              <RStyle.RStroke color={"#000000"} width={0.5} />
            </RStyle.RRegularShape>
          </RStyle.RStyle>
        </RStyleArray>
      )}

      <Link href={url}>
        <RFeature
          geometry={useMemo(() => {
            const feature = new GeoJSON({
              dataProjection: "EPSG:4326",
              featureProjection: "EPSG:3857",
            }).readFeature(platform)
            return (feature as Feature).getGeometry()
          }, [platform])}
        >
          <RPopup trigger={"hover"} autoPosition={true}>
            <div className="map-popup-custom">
              {platformName(platform)} <br></br>Flood level: {floodThreshold ? floodThreshold : "None"} <br></br>{" "}
              Predicted Flood Level: {predFloodThreshold ? predFloodThreshold : "None"}
            </div>
          </RPopup>
        </RFeature>
      </Link>
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
