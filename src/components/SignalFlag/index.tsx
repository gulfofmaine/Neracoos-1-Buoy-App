import * as React from "react"

export interface Props {
  character: string
  title: string
  style?: React.CSSProperties
}

export const SignalFlag: React.SFC<Props> = ({ character, title, style }) => {
  if (character.length !== 1) {
    return null
  }
  try {
    // tslint:disable-next-line:no-var-requires
    const svg = require("../../../node_modules/svg-signal-flags/dist/svg/" + character + ".svg")
    return <img src={svg} alt={title} title={title} style={style} />
  } catch (error) {
    return null
  }
}
