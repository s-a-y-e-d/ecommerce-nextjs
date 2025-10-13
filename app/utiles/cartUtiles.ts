"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";


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
  revalidatePath('/');
  return { updatedItem, cartData };
}
