import { Metadata } from "next"

import { ContentPage } from "Features/Content"

export default function About() {
  return <ContentPage name="about" />
}

export const metadata: Metadata = {
  title: "About",
}
