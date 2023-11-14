"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

import { ErddapMap } from "Features/ERDDAP/Map"
import { regionList } from "Shared/constants"

export function Map({ height }: { height: number }) {
  return <ErddapMap height={"80vh"} width="100%" />
}
