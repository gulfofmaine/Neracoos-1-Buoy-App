import React from "react"

export default function PlatformPage({ params }: { params: { platformId: string } }) {
  return <div>Hi, platform {params.platformId}</div>
}
