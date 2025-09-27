export default function formateMoney(priceCents){
  return (priceCents / 100).toFixed(2);
}