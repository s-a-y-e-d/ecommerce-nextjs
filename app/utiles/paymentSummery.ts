import { getCartData } from "@/lib/data";
import prisma from "@/lib/prisma";

export default async function calculatePayment() {
  const cart = await getCartData(true, true);

  const itemsPriceCents = cart.reduce((sum, cartItem) => {
    return sum + (cartItem.product.priceCents * cartItem.quantity);
  }, 0);
  console.log(itemsPriceCents);

  const shipingPriceCents = cart.reduce((sum, cartItem) => {
    return sum + (cartItem.deliveryOption.priceCents);
  }, 0);
  console.log(shipingPriceCents)

  const totalBeforeTax = itemsPriceCents + shipingPriceCents;
  const tax = (itemsPriceCents + shipingPriceCents) * 0.1;

  await prisma.paymentSummery.update({
    where: { id: '1' },
    data: {
      itemsTotalPrice: itemsPriceCents,
      shippingPrice: shipingPriceCents,
      totalBeforeTax,
      tax,
      total: totalBeforeTax + tax,
    },
  });
}