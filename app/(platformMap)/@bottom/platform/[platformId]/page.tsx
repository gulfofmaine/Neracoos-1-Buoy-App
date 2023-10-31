export default function CurrentConditions({ params }: { params: { platformId: string } }) {
  return <div>Current conditions for {params.platformId}</div>
}
