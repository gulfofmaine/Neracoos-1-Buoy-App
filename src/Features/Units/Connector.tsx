/**
 * Connect to the current unit system from Redux store
 */
import * as React from "react"

import { UnitSystem } from "Features/Units/types"

import { useUnitSystem } from "./hooks"

interface Props {
  children(props: RenderProps): React.ReactNode
}

interface RenderProps {
  unitSystem: UnitSystem
}

/**
 * Connect to the current unit system from Redux store
 */
export const UnitSystemConnector: React.FunctionComponent<Props> = ({ children }) => {
  const unitSystem = useUnitSystem()

  return children({ unitSystem })
}
