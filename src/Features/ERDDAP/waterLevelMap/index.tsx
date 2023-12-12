import { InitialRegion, regionList } from "Shared/regions"
import { EsriOceanBasemapLayer, EsriOceanReferenceLayer } from "components/Map"
import { useParams, usePathname } from "next/navigation"
import { fromLonLat, transformExtent } from "ol/proj"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { RMap } from "rlayers"
import { BaseProps, PlatformLayer, View, filterPlatforms } from "../Map"

const initial = { center: fromLonLat([-69.7, 43]), zoom: 6.7 }

export const ErddapWaterLevelMapBase: React.FC<BaseProps> = ({ platforms, platformId, height }: BaseProps) => {
  const mapRef = useRef<RMap>(null)
  const params: { regionId?: string; platformId?: string } = useParams()
  const [view, setView] = useState<View>(initial)
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
