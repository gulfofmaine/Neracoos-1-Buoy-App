import { Action } from "@app/actions"
import { resultToTimeseries } from "@app/Shared/erddap"

import * as actionTypes from "./actionTypes"
import { ERDDAPStoreState, initialStoreState, PlatformDataset } from "./types"

export function erddapReducer(state: ERDDAPStoreState = initialStoreState, action: Action): ERDDAPStoreState {
  switch (action.type) {
    case actionTypes.ERDDAP_PLATFORM_LOAD_ERROR:
      return {
        ...state,
        errorMessage: action.message,
        loading: false
      }

    case actionTypes.ERDDAP_PLATFORM_LOAD_STARTED:
      return {
        ...state,
        loading: true
      }

    case actionTypes.ERDDAP_PLATFORM_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        platforms: action.geojson.features.map(feature => {
          return {
            ...feature,
            properties: {
              ...feature.properties,
              readings: feature.properties!.readings.map(reading => {
                return {
                  ...reading,
                  error: "",
                  loading: false,
                  readings: []
                } as PlatformDataset
              })
            }
          }
        })
      }

    case actionTypes.ERDDAP_DATASET_LOAD_ERROR:
      const datasetErrorSet = new Set(action.datasets.map(dataset => JSON.stringify(dataset)))

      return {
        ...state,
        platforms: [
          ...state.platforms.filter(platform => platform.id !== action.platformId),
          ...state.platforms
            .filter(platform => platform.id === action.platformId)
            .map(platfrom => ({
              ...platfrom,
              properties: {
                ...platfrom.properties,
                readings: [
                  ...platfrom.properties.readings.filter(dataset => !datasetErrorSet.has(JSON.stringify(dataset))),
                  ...platfrom.properties.readings
                    .filter(dataset => datasetErrorSet.has(JSON.stringify(dataset)))
                    .map(dataset => ({
                      ...dataset,
                      error: action.message,
                      loading: false
                    }))
                ]
              }
            }))
        ]
      }

    case actionTypes.ERDDAP_DATASET_LOAD_STARTED:
      const datasetStartedSet = new Set(action.datasets.map(dataset => JSON.stringify(dataset)))

      return {
        ...state,
        platforms: [
          ...state.platforms.filter(platform => platform.id !== action.platformId),
          ...state.platforms
            .filter(platform => platform.id === action.platformId)
            .map(platform => ({
              ...platform,
              properties: {
                ...platform.properties,
                readings: [
                  ...platform.properties.readings.filter(dataset => !datasetStartedSet.has(JSON.stringify(dataset))),
                  ...platform.properties.readings
                    .filter(dataset => datasetStartedSet.has(JSON.stringify(dataset)))
                    .map(dataset => ({
                      ...dataset,
                      error: "",
                      loading: true
                    }))
                ]
              }
            }))
        ]
      }
    case actionTypes.ERDDAP_DATASET_LOAD_SUCCESS:
      const datasetSuccessSet = new Set(action.datasets.map(dataset => JSON.stringify(dataset)))

      return {
        ...state,
        platforms: [
          ...state.platforms.filter(platform => platform.id !== action.platformId),
          ...state.platforms
            .filter(platform => platform.id === action.platformId)
            .map(platfrom => ({
              ...platfrom,
              properties: {
                ...platfrom.properties,
                readings: [
                  ...platfrom.properties.readings.filter(
                    dataset => !datasetSuccessSet.has(JSON.stringify({ ...dataset, loading: false }))
                  ),
                  ...platfrom.properties.readings
                    .filter(dataset => datasetSuccessSet.has(JSON.stringify({ ...dataset, loading: false })))
                    .map(dataset => ({
                      ...dataset,
                      error: "",
                      loading: false,
                      readings: Array.from(
                        // make sure that we only have one of each time point
                        new Set(
                          [
                            ...dataset.readings,
                            ...resultToTimeseries(action.data, [dataset.variable])[0].timeSeries
                          ].map(reading => JSON.stringify(reading))
                        )
                      ).map(reading => JSON.parse(reading))
                    }))
                ]
              }
            }))
        ]
      }

    default:
      return state
  }
}
