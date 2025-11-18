"use server"

import { getCartData, getCartItemsData } from "@/lib/data";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { CartItem } from "@/app/generated/prisma";
import { error } from "console";


export default async function calculatePayment() {

  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect('/auth');
  }

  const userId = session.user.id;

  const cartItems = await getCartItemsData(userId) as CartItem[];

  const itemsPriceCents = cartItems.reduce((sum: number, cartItem: any) => {
    return sum + (cartItem.product.priceCents * cartItem.quantity);
  }, 0);

  const shipingPriceCents = 999;

  const totalBeforeTax = itemsPriceCents + shipingPriceCents;
  const tax = (itemsPriceCents + shipingPriceCents) * 0.1;

  try {
    await prisma.paymentSummary.update({
      where: { userId },
      data: {
        itemsTotalPrice: itemsPriceCents,
        shippingPrice: shipingPriceCents,
        totalBeforeTax,
        tax,
        total: totalBeforeTax + tax,
      },
    });
  } catch (e) {

  }

}
