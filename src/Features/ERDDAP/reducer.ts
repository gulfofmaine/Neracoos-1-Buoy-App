import { Action } from "actions"
import { resultToTimeseries } from "Shared/erddap"

import * as actionTypes from "./actionTypes"
import { ERDDAPStoreState, initialStoreState, PlatformDataset } from "./types"

/**
 * Extract unique identifying details about a dataset and stringify so that it can be used in a set filter
 *
 * @param dataset Dataset to extract details from
 * @returns Stringified version of key dataset details
 */
export function filterableDataset({
  constraints,
  data_type,
  dataset,
  depth,
  server,
  variable
}: PlatformDataset): string {
  return JSON.stringify({ constraints, data_type, dataset, depth, server, variable })
}

export function erddapReducer(state: ERDDAPStoreState = initialStoreState, action: Action): ERDDAPStoreState {
  switch (action.type) {
    // Platform loading
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
              forecasts: [],
              readings: feature.properties!.readings.map(reading => {
                return {
                  ...reading,
                  error: "",
                  loadStartTimes: [],
                  loading: false,
                  readings: []
                } as PlatformDataset
              })
            }
          }
        })
      }

    // Dataset loading
    case actionTypes.ERDDAP_DATASET_LOAD_ERROR:
      const datasetErrorSet = new Set(action.datasets.map(dataset => filterableDataset(dataset)))

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
                  ...platfrom.properties.readings.filter(dataset => !datasetErrorSet.has(filterableDataset(dataset))),
                  ...platfrom.properties.readings
                    .filter(dataset => datasetErrorSet.has(filterableDataset(dataset)))
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
      const datasetStartedSet = new Set(action.datasets.map(dataset => filterableDataset(dataset)))

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
                  ...platform.properties.readings.filter(dataset => !datasetStartedSet.has(filterableDataset(dataset))),
                  ...platform.properties.readings
                    .filter(dataset => datasetStartedSet.has(filterableDataset(dataset)))
                    .map(dataset => ({
                      ...dataset,
                      error: "",
                      loadStartTimes: [...dataset.loadStartTimes, action.time],
                      loading: true
                    }))
                ]
              }
            }))
        ]
      }
    case actionTypes.ERDDAP_DATASET_LOAD_SUCCESS:
      const datasetSuccessSet = new Set(action.datasets.map(dataset => filterableDataset(dataset)))

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
                  ...platfrom.properties.readings.filter(dataset => !datasetSuccessSet.has(filterableDataset(dataset))),
                  ...platfrom.properties.readings
                    .filter(dataset => datasetSuccessSet.has(filterableDataset(dataset)))
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
                          ].map(reading => JSON.stringify(reading) as any)
                        )
                      )
                        .map(reading => JSON.parse(reading))
                        .map(reading => ({ ...reading, time: new Date(reading.time) }))
                    }))
                ]
              }
            }))
        ]
      }

    // Forecast metadata loading
    case actionTypes.ERDDAP_FORECAST_METADATA_LOAD_STARTED:
      return {
        ...state,
        forecasts: {
          ...state.forecasts,
          errorMessage: undefined,
          loading: true
        }
      }

    case actionTypes.ERDDAP_FORECAST_METADATA_LOAD_ERROR:
      return {
        ...state,
        forecasts: {
          ...state.forecasts,
          errorMessage: action.message,
          loading: false
        }
      }

    case actionTypes.ERDDAP_FORECAST_METADATA_LOAD_SUCCESS:
      return {
        ...state,
        forecasts: {
          ...state.forecasts,
          errorMessage: undefined,
          forecasts: action.forecasts,
          loading: false
        }
      }

    // Forecast data loading

    case actionTypes.ERDDAP_FORECAST_LOAD_STARTED:
      return {
        ...state,
        platforms: [
          ...state.platforms.filter(platform => (platform.id as string) !== action.platformId),
          ...state.platforms
            .filter(platform => (platform.id as string) === action.platformId)
            .map(platform => ({
              ...platform,
              properties: {
                ...platform.properties,
                forecasts: [
                  ...platform.properties.forecasts.filter(forecast => action.forecast !== forecast.source),
                  { error: "", loading: true, readings: [], source: action.forecast }
                ]
              }
            }))
        ]
      }

    case actionTypes.ERDDAP_FORECAST_LOAD_ERROR:
      return {
        ...state,
        platforms: [
          ...state.platforms.filter(platform => (platform.id as string) !== action.platformId),
          ...state.platforms
            .filter(platform => (platform.id as string) === action.platformId)
            .map(platform => ({
              ...platform,
              properties: {
                ...platform.properties,
                forecasts: [
                  ...platform.properties.forecasts.filter(forecast => action.forecast !== forecast.source),
                  ...platform.properties.forecasts
                    .filter(forecast => action.forecast === forecast.source)
                    .map(forecast => ({
                      ...forecast,
                      error: action.message,
                      loading: false
                    }))
                ]
              }
            }))
        ]
      }

    case actionTypes.ERDDAP_FORECAST_LOAD_SUCCESS:
      return {
        ...state,
        platforms: [
          ...state.platforms.filter(platform => (platform.id as string) !== action.platformId),
          ...state.platforms
            .filter(platform => (platform.id as string) === action.platformId)
            .map(platform => ({
              ...platform,
              properties: {
                ...platform.properties,
                forecasts: [
                  ...platform.properties.forecasts.filter(forecast => action.forecast !== forecast.source),
                  ...platform.properties.forecasts
                    .filter(forecast => action.forecast === forecast.source)
                    .map(forecast => ({
                      ...forecast,
                      error: "",
                      loading: false,
                      readings: action.readings
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
