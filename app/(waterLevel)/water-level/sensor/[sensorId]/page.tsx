import { PlatformInfo } from "Pages/Platforms/platformInfo"

export default function sensorIdPage({ params }) {
  return (
    <>
      <PlatformInfo id={params.sensorId} />
      {/* <ErddapWaterLevelMapBase platforms/> */}
    </>
  )
}
