/**
 * Platforms loading component
 */

import * as React from "react"
import { connect } from "react-redux"
import { Alert, Col, Row } from "reactstrap"
import { bindActionCreators, Dispatch } from "redux"

import { StoreState } from "Shared/constants/store"

import { erddapPlatformLoad } from "../actions"
import { PlatformFeatureWithDatasets } from "../types"

export interface Props {
  children: React.ReactNode
}

export interface ReduxProps {
  loadPlatforms: () => void
  loading: boolean
  platforms: PlatformFeatureWithDatasets[]
  errorMessage?: string
}

const mapStateToProps = ({ erddap }: StoreState): Pick<ReduxProps, "loading" | "platforms" | "errorMessage"> => {
  return erddap
}

const mapDispatchToProps = (dispatch: Dispatch): Pick<ReduxProps, "loadPlatforms"> =>
  bindActionCreators(
    {
      loadPlatforms: erddapPlatformLoad
    },
    dispatch
  )

export class ErddapPlatformsLoaderBase extends React.Component<Props & ReduxProps, object> {
  constructor(props: Props & ReduxProps) {
    super(props)

    this.retry = this.retry.bind(this)
  }

  public render(): React.ReactNode {
    if (this.props.platforms.length > 0) {
      return this.props.children
    } else if (this.props.errorMessage && this.props.errorMessage.length > 0) {
      return (
        <Row>
          <Col>
            <Alert color="warning" toggle={this.retry}>
              <h4>{this.props.errorMessage}</h4>
            </Alert>
          </Col>
        </Row>
      )
    } else if (this.props.loading) {
      return (
        <Row>
          <Col>
            <Alert color="primary">Loading information about platforms from ERDDAP.</Alert>
          </Col>
        </Row>
      )
    } else {
      this.props.loadPlatforms()

      return (
        <Row>
          <Col>
            <Alert color="primary">Trying to load platforms from ERDDAP.</Alert>
          </Col>
        </Row>
      )
    }
  }

  private retry(): void {
    this.props.loadPlatforms()
  }
}

export const ErddapPlatformsLoader = connect<Props & ReduxProps>(
  // @ts-ignore
  mapStateToProps,
  mapDispatchToProps
)(ErddapPlatformsLoaderBase)
