export default function formateMoney(priceCents: number) {
  return (priceCents / 100).toFixed(2);
}