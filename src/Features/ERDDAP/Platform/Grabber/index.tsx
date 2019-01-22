/**
 * Component to retrieve platform from store and pass to children as render prop
 */
import * as React from "react"
import { connect } from "react-redux"

import { StoreState } from "@app/constants"

import { PlatformFeatureWithDatasets } from "../../types"

export interface Props {
  /** selected platfrom id */
  platformId: string
  children(props: RenderProps): JSX.Element
}

export interface ReduxProps {
  platforms: PlatformFeatureWithDatasets[]
}

export interface RenderProps {
  platform: PlatformFeatureWithDatasets
}

function mapStateToProps({ erddap }: StoreState): ReduxProps {
  return {
    platforms: erddap.platforms
  }
}

export class ErddapPlatformGetterBase extends React.Component<Props & ReduxProps, object> {
  public render() {
    const platforms = this.props.platforms.filter(p => (p.id as string) === this.props.platformId)

    if (platforms.length > 0) {
      return this.props.children({ platform: platforms[0] })
    } else {
      return <p>Unable to load platform {this.props.platformId}</p>
    }
  }
}

export const ErddapPlatformGetter = connect(mapStateToProps)(ErddapPlatformGetterBase)
