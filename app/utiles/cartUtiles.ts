"use server";
import prisma from "@/lib/prisma";
import { revalidateTag } from "next/cache";


export async function loadCartData() {
  const cartData = await prisma.cart.findMany();
  return cartData;
}


export async function addToCart(productId: string, quantity: number) {

  const updatedItem = await prisma.cart.upsert({
    where: { productId },
    update: {
      quantity: {
        increment: quantity
      }
    },
    create: { productId, quantity },
  });

  const cartData = await loadCartData();
  revalidateTag('cart');
  return { updatedItem, cartData };
}
