export default function formatDate (unixSeconds: number) {
  const d = new Date(unixSeconds * 1000)

  return d.toLocaleString()
}