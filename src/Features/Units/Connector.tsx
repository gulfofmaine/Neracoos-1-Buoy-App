/**
 * Connect to the current unit system from Redux store
 */
import * as React from "react"

import { UnitSystem } from "Features/Units/types"

import { useUnitSystem } from "./hooks"

interface Props {
  children(props: RenderProps): JSX.Element
}

interface RenderProps {
  unit_system: UnitSystem
}

/**
 * Connect to the current unit system from Redux store
 */
export const UnitSystemConnector: React.FunctionComponent<Props> = ({ children }) => {
  const unit_system = useUnitSystem()

  return children({ unit_system })
}
