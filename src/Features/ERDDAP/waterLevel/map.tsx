import { useParams, usePathname } from "next/navigation"
import { fromLonLat, transformExtent } from "ol/proj"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { RMap } from "rlayers"

import { EsriOceanBasemapLayer, EsriOceanReferenceLayer } from "components/Map"
import { WLLegend } from "Features/ERDDAP/waterLevel/WLLegend"
import { InitialRegion, regionList } from "Shared/regions"

import { BaseProps, View, filterPlatforms } from "../Map"
import { usePlatforms } from "../hooks"
import { WLPlatformLayer } from "../Map/WLPlatformLayer"

const initial = { center: fromLonLat([-70.5, 43.5]), zoom: 6.7 }

interface Props extends BaseProps {
  mapView?: View
}

export const ErddapWaterLevelMapBase: React.FC<Props> = ({ platforms, platformId, height, mapView }: Props) => {
  const mapRef = useRef<RMap>(null)
  const params: { regionId?: string; platformId?: string } = useParams()
  const [view, setView] = useState<View>(mapView ?? initial)
  const path = usePathname()

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
    <div style={{ position: "relative" }}>
      <RMap ref={mapRef} className="map" initial={initial} view={[view || initial, setView]} height={height}>
        <WLLegend />
        <EsriOceanBasemapLayer />
        <EsriOceanReferenceLayer />

        {oldPlatforms.map((p) => {
          return <WLPlatformLayer key={p.id} platform={p} selected={false} old={true} />
        })}
        {filteredPlatforms.map((p) => (
          <WLPlatformLayer key={p.id} platform={p} selected={false} old={false} />
        ))}
        {!!selectedPlatforms.length && (
          <WLPlatformLayer key={selectedPlatforms[0].id} platform={selectedPlatforms[0]} selected={true} old={false} />
        )}
      </RMap>
    </div>
  )
}

export const ErddapWaterLevelMap = () => {
  const { data } = usePlatforms()

  if (data?.features) {
    return <ErddapWaterLevelMapBase platforms={data.features} height={"60vh"} />
  }
  return null
}
