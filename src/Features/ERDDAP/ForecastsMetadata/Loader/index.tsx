import * as React from "react"
import { connect } from "react-redux"
import { NavItem, NavLink } from "reactstrap"
import { bindActionCreators, Dispatch } from "redux"

import { StoreState } from "@app/constants"

import { forecastMetadataLoad } from "../../actions"
import { ForecastSource } from "../../types"

export interface Props {
  children: React.ReactElement<any>
}

export interface ReduxProps {
  errorMessage?: string
  loading: boolean
  forecasts: ForecastSource[]
  loadForecastMetadata: () => void
}

function mapStateToProps({ erddap }: StoreState): Partial<ReduxProps> {
  return { ...erddap.forecasts }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      loadForecastMetadata: forecastMetadataLoad
    },
    dispatch
  )

export const ForecastMetataLoaderBase: React.SFC<Props & ReduxProps> = ({
  children,
  errorMessage,
  forecasts,
  loadForecastMetadata,
  loading
}) => {
  if (forecasts.length > 0) {
    return children
  } else if (errorMessage && errorMessage.length > 0) {
    return (
      <NavItem>
        <NavLink disabled={true} href="#">
          Forecasts not avaliable
        </NavLink>
      </NavItem>
    )
  } else if (loading) {
    return (
      <NavItem>
        <NavLink disabled={true} href="#">
          Forecasts loading
        </NavLink>
      </NavItem>
    )
  }
  loadForecastMetadata()

  return (
    <NavItem>
      <NavLink disabled={true} href="#">
        Forecasts starting to load
      </NavLink>
    </NavItem>
  )
}

export const ForecastMetadataLoader = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForecastMetataLoaderBase)
