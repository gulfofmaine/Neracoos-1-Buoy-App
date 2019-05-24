/**
 * Platforms loading component
 */

import * as React from "react"
import { connect } from "react-redux"
import { Alert, Col, Row } from "reactstrap"
import { bindActionCreators, Dispatch } from "redux"

import { StoreState } from "Shared/constants"

import { erddapPlatformLoad } from "../actions"
import { PlatformFeatureWithDatasets } from "../types"

export interface ReduxProps {
  loadPlatforms: () => void
  loading: boolean
  platforms: PlatformFeatureWithDatasets[]
  errorMessage: string
}

function mapStateToProps({ erddap }: StoreState) {
  return erddap
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      loadPlatforms: erddapPlatformLoad
    },
    dispatch
  )

export class ErddapPlatformsLoaderBase extends React.Component<ReduxProps, object> {
  constructor(props: ReduxProps) {
    super(props)

    this.retry = this.retry.bind(this)
  }

  public render() {
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

  private retry() {
    this.props.loadPlatforms()
  }
}

export const ErddapPlatformsLoader = connect(
  mapStateToProps,
  mapDispatchToProps
)(ErddapPlatformsLoaderBase)
