/**
 * Component to retrieve platform from store and pass to children as render prop
 */
import * as React from "react"

import { usePlatforms } from "../../hooks"
import { PlatformFeature, PlatformFeatureCollection } from "../../types"

export interface Props {
  /** selected platform id */
  platformId: string
  children: (props: RenderProps) => JSX.Element
}

export interface RenderProps {
  platform: PlatformFeature
}

export const ErddapPlatformGetter: React.FunctionComponent<Props> = ({ platformId, children }) => {
  const { isLoading, data } = usePlatforms()

  if (isLoading) {
    return <h4>Loading platform data</h4>
  }

  if (data) {
    const platform = (data as PlatformFeatureCollection).features.filter((p) => (p.id as string) === platformId)

    if (platform.length > 0) {
      return children({ platform: platform[0] })
    } else {
      return <p>Unable to load platform {platformId}</p>
    }
  }

  return <h4>Error</h4>
}

interface PlatformsRenderProps {
  platforms: PlatformFeature[]
}

interface PlatformsProps {
  children: (props: PlatformsRenderProps) => JSX.Element
}

export const ErddapPlatformsGrabber: React.FunctionComponent<PlatformsProps> = ({ children }) => {
  const { isLoading, data } = usePlatforms()

  if (isLoading) {
    return <h4>Loading platform data</h4>
  }

  if (data) {
    const platforms = (data as PlatformFeatureCollection).features

    return children({ platforms })
  }

  return <h4>Error</h4>
}
