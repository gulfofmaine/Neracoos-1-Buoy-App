/**
 * Components to use React-Query in a common way
 */
import * as React from "react"
import { Alert } from "reactstrap"

import { PlatformFeature, PlatformFeatureCollection } from "../types"

import { usePlatforms } from "./buoyBarn"

interface BaseProps {
  /** Override default loading alert */
  loading?: JSX.Element
  /** Override default error alert */
  error?: JSX.Element
}

interface UsePlatformsProps extends BaseProps {
  /** Pass platforms to child elements */
  children: (props: UsePlatformsRenderProps) => JSX.Element
}

export interface UsePlatformsRenderProps {
  /** Array of platforms */
  platforms: PlatformFeature[]
}

/**
 * Load platforms from Buoy Barn and then pass them to the child elements.
 *
 * @param children Elements to render when platforms are loaded, and able to receive platform array
 * @param loading override default loading alert
 * @param error override default error message
 */
export const UsePlatforms: React.FunctionComponent<UsePlatformsProps> = ({ children, loading, error }) => {
  const { isLoading, data } = usePlatforms()

  if (isLoading) {
    if (loading) {
      return loading
    }

    return <Alert color="primary">Loading platform data</Alert>
  }

  if (data) {
    const platforms = (data as PlatformFeatureCollection).features

    return children({ platforms })
  }

  if (error) {
    return error
  }

  return <Alert color="warning">Unable to load platforms</Alert>
}

interface UsePlatformProps extends BaseProps {
  /** Children elements to render selected platform information */
  children: (props: UsePlatformRenderProps) => JSX.Element
  /** Platform to try to render */
  platformId: string
}

export interface UsePlatformRenderProps {
  /** Selected platform information */
  platform: PlatformFeature
}

/**
 * Load and display a specific platform
 *
 * @param children Children elements to pass platform to
 * @param platformId Platform ID string to try to load
 * @param loading Override default loading alert
 * @param error Override default error alert
 */
export const UsePlatform: React.FunctionComponent<UsePlatformProps> = ({ children, loading, error, platformId }) => (
  <UsePlatforms {...{ loading, error }}>
    {({ platforms }) => {
      const platform = platforms.find((p) => (p.id as string) === platformId)

      if (platform) {
        return children({ platform })
      }

      if (error) {
        return error
      }

      return <Alert>Unable to load platform information for {decodeURIComponent(platformId)}.</Alert>
    }}
  </UsePlatforms>
)
