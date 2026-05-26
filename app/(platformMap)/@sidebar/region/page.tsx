import Card from "react-bootstrap/Card"
import Link from "next/link"

import { regionMenuList } from "Shared/regions"

export default function RegionIndexSidebar() {
  return (
    <Card className="p-2">
      <h2>Regions</h2>
      <ul>
        {regionMenuList.map((r) => (
          <li key={r.slug}>
            <Link href={`/region/${r.slug}`}>{r.name}</Link>
          </li>
        ))}
      </ul>
    </Card>
  )
}
