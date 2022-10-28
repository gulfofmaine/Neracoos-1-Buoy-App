import React from "react"

import ContentBlock from "components/ContentBlock"

async function getPageById(pageId: number) {
  const res = await fetch(`https://content.gmri.io/api/pages/${pageId}/?format=json`, { next: { revalidate: 300 } })

  return res.json()
}

export default async function WagtailBlock({ pageId }: { pageId: number }) {
  const blockData = await getPageById(pageId)

  return <ContentBlock content={blockData.body} />
}
