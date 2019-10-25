/**
 * Component to select and display currently selected unit type
 */
import * as React from "react"
import { Button, ButtonGroup } from "reactstrap"
import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"

import { StoreState } from "Shared/constants/store"

import { unitSwitch } from "../actions"
import { UnitSystem } from "../types"

export interface ReduxProps {
  system: UnitSystem
  switchUnits: (system: UnitSystem) => void
}

const mapStateToProps = ({ unit }: StoreState): Pick<ReduxProps, "system"> => {
  return {
    system: unit.system
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      switchUnits: unitSwitch
    },
    dispatch
  )

export class UnitSelectorBase extends React.Component<ReduxProps, object> {
  public render(): React.ReactNode {
    return (
      <ButtonGroup>
        {this.unitButton(UnitSystem.metric)}
        {this.unitButton(UnitSystem.imperial)}
        {this.unitButton(UnitSystem.mariners)}
      </ButtonGroup>
    )
  }

  private unitButton(buttonSystem: UnitSystem): React.ReactNode {
    const { system } = this.props

    return (
      <Button
        color="primary"
        size="sm"
        id={buttonSystem}
        active={system === buttonSystem}
        onClick={this.setSystem(buttonSystem)}
      >
        {buttonSystem}
      </Button>
    )
  }

  private setSystem = (system: UnitSystem) => () => {
    this.props.switchUnits(system)
  }
}

export const UnitSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnitSelectorBase)
