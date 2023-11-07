"use client"
import { useParams } from "next/navigation"

import PlatformSidebar from "./platform/[platformId]/page"

export default function SidebarDefault() {
  const params = useParams()

  if ("platformId" in params) {
    return <PlatformSidebar params={params as { platformId: string }} />
  }

  return null
}
