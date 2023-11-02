import { ErddapMap } from "Features/ERDDAP/Map"

export function Map({ height }: { height: number }) {
  return <ErddapMap height={height} width="100%" />
}
