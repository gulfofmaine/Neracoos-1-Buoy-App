"use client"
import { usePathname } from "next/navigation"
import { Superlatives } from "Features/ERDDAP/Superlatives/index"

export function HomeSuperlatives() {
  const path = usePathname()

  if (path === "/") {
    return <Superlatives />
  }

  return null
}
