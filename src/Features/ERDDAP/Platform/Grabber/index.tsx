/**
 * Component to retrieve platform from store and pass to children as render prop
 */
import * as React from "react"
import { Alert } from "reactstrap"

import { usePlatforms } from "../../hooks"
import { PlatformFeature, PlatformFeatureCollection } from "../../types"

interface PlatformsRenderProps {
  platforms: PlatformFeature[]
}

interface PlatformsProps {
  children: (props: PlatformsRenderProps) => JSX.Element
}

/**
 * Load data for all platforms
 */
export const ErddapPlatformsGrabber: React.FunctionComponent<PlatformsProps> = ({ children }) => {
  const { isLoading, data } = usePlatforms()

  if (isLoading) {
    return <Alert>Loading platform data</Alert>
  }

  if (data) {
    const platforms = (data as PlatformFeatureCollection).features

    return children({ platforms })
  }

  return <Alert>Error</Alert>
}

export interface Props {
  /** selected platform id */
  platformId: string
  children: (props: RenderProps) => JSX.Element
}

export interface RenderProps {
  platform: PlatformFeature
}

/**
 * Load data for a specific platform
 */
export const ErddapPlatformGetter: React.FunctionComponent<Props> = ({ platformId, children }) => (
  <ErddapPlatformsGrabber>
    {({ platforms }) => {
      const platform = platforms.find((p) => (p.id as string) === platformId)

      if (platform) {
        return children({ platform })
      }
      return <Alert>Unable to load platform {platformId}</Alert>
    }}
  </ErddapPlatformsGrabber>
)
