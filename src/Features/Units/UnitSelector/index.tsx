/**
 * Component to select and display currently selected unit type
 */
import * as React from "react"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"

import { RootState } from "../../../../app/store"

import { unitSwitch } from "../slice"
import { UnitSystem } from "../types"

export interface ReduxProps {
  system: UnitSystem
  switchUnits: (system: UnitSystem) => void
}

const mapStateToProps = ({ unit }: RootState): Pick<ReduxProps, "system"> => {
  return {
    system: unit.system,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      switchUnits: unitSwitch,
    },
    dispatch,
  )

export class UnitSelectorBase extends React.Component<ReduxProps, object> {
  public render(): React.ReactNode {
    return (
      <ButtonGroup className="unit-selector">
        {this.unitButton(UnitSystem.metric)}
        {this.unitButton(UnitSystem.english)}
      </ButtonGroup>
    )
  }

  private unitButton(buttonSystem: UnitSystem): React.ReactNode {
    const { system } = this.props

    return (
      <Button
        variant={system === buttonSystem ? "primary" : "light"}
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

export const UnitSelector = connect(mapStateToProps, mapDispatchToProps)(UnitSelectorBase)
