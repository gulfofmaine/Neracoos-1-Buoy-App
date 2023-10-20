import { Metadata } from "next"

import { WagtailBlock } from "Features/WagtailApi/WagtailBlock.next"

export default function About() {
  return <WagtailBlock pageId="5" />
}

export const metadata: Metadata = {
  title: "About",
}
