"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import calculatePayment from "./paymentSummery";
import { Cart } from "../generated/prisma";


export async function loadCartData() {
  const cartData = await prisma.cart.findMany();
  return cartData;
}


export async function addToCart(productId: string, quantity: number) {
  await prisma.cart.upsert({
    where: { productId },
    update: {
      quantity: {
        increment: quantity
      }
    },
    create: {
      quantity,
      product: {
        connect: {
          id: productId
        }
      }
    },
  });
  calculatePayment();
}

export async function selectDeliveryOption(cartItem: Cart, deliveryoptionId: number) {
  await prisma.cart.update({
    where: { id: cartItem.id },
    data: { deliveryoptionId },
  });
  calculatePayment();
  revalidatePath('/checkout');
}

export async function deleteCartItem(cartItem: Cart) {
  await prisma.cart.delete({
    where: { id: cartItem.id },
  });
  calculatePayment();
  revalidatePath('/checkout');
}

/*export async function addToOrders(cartItem){
  await prisma.order.create({
    data:{
      cartId: cartItem.id,
    }
  })
}
*/