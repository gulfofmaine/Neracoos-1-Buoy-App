import * as JSURL from "jsurl2"
import { fromLonLat, toLonLat } from "ol/proj"
import React from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import type { RView } from "rlayers/RMap"

import { round } from "Shared/math"

import { IItem } from "@gulfofmaine/tsstac"

import { useLatestItemByCollectionIdQuery } from "./stac-queries"
import { Layer, initialLayer, initialView } from "./types"

/**
 * Create a hook to keep query params in sync with state
 * @param key name of object to synce
 * @returns synced object and setter for synced object
 */
export function useQueryParam<T>(key: string): [T | undefined, (newQuery: T) => void] {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const setSearchParams = React.useCallback(
    (newSearchParams: URLSearchParams) => {
      router.push(pathname + "?" + newSearchParams.toString())
    },
    [router, pathname],
  )

  const paramValue = searchParams.get(key)

  const value: T | undefined = React.useMemo(() => (paramValue ? JSURL.parse(paramValue) : undefined), [paramValue])

  const setValue = React.useCallback(
    (newValue: T) => {
      let newSearchParams = new URLSearchParams(searchParams)
      newSearchParams.set(key, JSURL.stringify(newValue))
      setSearchParams(newSearchParams)
    },
    [key, searchParams, setSearchParams],
  )

  return [value, setValue]
}

/**
 * Sync the current map view with the state
 * @returns view and view setter
 */
export function useView(): [RView, (RView) => void] {
  const [view, setUnroundedView] = useQueryParam<RView>("view")

  const setView = ({ center, zoom }: RView) => {
    const centerLonLat = toLonLat(center)
    setUnroundedView({ zoom: round(zoom), center: [round(centerLonLat[0], 4), round(centerLonLat[1], 4)] })
  }

  return [view ?? initialView, setView]
}

/**
 * Hook to manipulate the primary layer being mapped and plotted
 * @returns the current layer and a setting function
 */
export function useLayer(): [Layer, (Layer) => void] {
  const [layer, setLayer] = useQueryParam<Layer>("layer")

  return [layer ?? initialLayer, setLayer]
}

/**
 * Hook to return the current layer and item
 */
export function useCurrentItem(): [Layer?, IItem?] {
  const [layer, setLayer] = useLayer()

  const itemQuery = useLatestItemByCollectionIdQuery(layer.id ?? "", !!layer.id)

  return [layer, itemQuery.data]
}

/**
 * Hook to manipulate all the layers to be compared to the primary layer
 * @returns the current compare layers and a function to set them
 */
export function useCompare(): [Layer[], (Layer) => void] {
  const [currentLayer, setLayer] = useLayer()
  const [layers, setCompare] = useQueryParam<Layer[]>("compare")

  React.useEffect(() => {
    const compareLayers = [
      ...(layers ?? []).filter((l) => l.id !== currentLayer.id),
      ...(layers ?? [])
        .filter((l) => l.id === currentLayer.id)
        .map((l) => ({ ...l, vars: l.vars?.filter((v) => v !== (currentLayer.vars ?? [])[0] ?? true) })),
    ]

    setCompare(compareLayers)
  }, [currentLayer, layers, setCompare])

  const toggleCompare = (layer: Layer) => {
    const compareLayers = (layers ?? []).filter((l) => l.id !== layer.id)

    const selectedLayer = (layers ?? []).find((l) => l.id === layer.id)

    if (selectedLayer) {
      const vars = (selectedLayer.vars ?? []).filter((v) => v !== (layer.vars ?? [])[0])

      if (vars.length > 0 && vars.length === selectedLayer.vars.length) {
        vars.push(layer.vars[0])

        compareLayers.push({ ...layer, vars })
      }
    } else {
      compareLayers.push(layer)
    }

    setCompare(compareLayers)
  }

  return [layers ?? [], toggleCompare]
}

export function usePoint(): [[number, number] | undefined, ([x, y]: [number, number]) => void] {
  return useQueryParam<[number, number]>("point")
}

/**
 * Hooks to show table in place of chart or not
 */
export function useTable() {
  return useQueryParam<boolean>("table")
}

/**
 * Access and set the selected time in the URL
 *
 * @returns time and a function to set the time in the URL
 */
export function useTime() {
  return useQueryParam<string>("time")
}
