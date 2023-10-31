"use client"
import { usePathname } from "next/navigation"

import { Superlatives } from "Features/ERDDAP/Superlatives/index.next"
import { DehydratedPlatforms } from "Features/ERDDAP/hooks/DehydrateComponent"

export default async function IndexBelowMap() {
  const path = usePathname()

  if (path === "/") {
    return (
      <DehydratedPlatforms>
        <Superlatives />
      </DehydratedPlatforms>
    )
  }

  return null
}
