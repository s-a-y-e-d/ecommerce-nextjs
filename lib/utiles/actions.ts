"use server"

import prisma from "@/lib/prisma";
import { refresh, revalidatePath, revalidateTag, updateTag } from "next/cache";
//import calculatePayment from "./paymentSummery";
import { Cart, CartItem } from "../../app/generated/prisma";
import { auth } from "../auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import calculatePayment from "./paymentSummery";



export async function loadCartData() {
  const cartData = await prisma.cart.findMany();
  return cartData;
}


export async function addToCart(productId: string, quantity: number) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect('/auth');
  }

  const userId = session.user.id;

  const cart = await prisma.cart.upsert({
    where: { userId },
    update: {},
    create: { userId }
  });

  const item = await prisma.cartItem.upsert({
    where: {
      cartId_productId: {
        cartId: cart.id,
        productId,
      },
    },
    update: {
      quantity: {
        increment: quantity,
      }
    },
    create: {
      cartId: cart.id,
      productId,
      quantity,
    },
  });
  calculatePayment();
  //revalidateTag(`cart-${userId}`);
}


export async function deleteCartItem(cartItem: CartItem) {
  await prisma.cartItem.delete({
    where: { id: cartItem.id },
  });
  calculatePayment();

}


/*export async function addToOrders(cartItem){
  await prisma.order.create({
    data:{
      cartId: cartItem.id,
    }
  })
}
*/
