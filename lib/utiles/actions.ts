"use server"

import prisma from "@/lib/prisma";
import { CartItem } from "../../app/generated/prisma";
import { auth } from "../auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import calculatePayment from "./paymentSummery";
import { getSession } from "./auth-action";

type AddToResult = { error?: string, submissionId?: string };


export async function addToCart(
  prevState: AddToResult | null,
  formData: FormData
): Promise<AddToResult> {

  try {
    const session = await auth.api.getSession({ headers: await headers() });

    if (!session) redirect("/auth");

    const userId = session.user.id;
    const productId = formData.get("productId") as string;
    const quantity = Number(formData.get("quantity"));

    if (!productId || !quantity || quantity < 1) {
      return { error: "Invalid request", submissionId: crypto.randomUUID() };
    }

    const cart = await prisma.cart.upsert({
      where: { userId },
      update: {},
      create: { userId },
    });

    await prisma.cartItem.upsert({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId,
        },
      },
      update: {
        quantity: { increment: quantity },
      },
      create: {
        cartId: cart.id,
        productId,
        quantity,
      },
    });

    await calculatePayment();
    return { submissionId: crypto.randomUUID() };
  } catch (e) {
    if ((e as any).message === 'NEXT_REDIRECT') {
      throw e;
    }
    return { error: "Failed to add to cart", submissionId: crypto.randomUUID() };
  }
}


export async function deleteCartItem(cartItem: CartItem) {
  await prisma.cartItem.delete({
    where: { id: cartItem.id },
  });
  calculatePayment();

}


export async function addToOrders(
  prevState: AddToResult | null,
  formData: FormData
): Promise<AddToResult> {

  try {
    const session = await getSession();

    if (!session) {
      redirect('/auth');
    }

    const userId = session.user.id;

    const result = await prisma.$transaction(async (tx) => {
      const cartPromise = tx.cart.findUnique({
        where: { userId },
        include: {
          items: {
            include: { product: true },
          },
        },
      });

      const paymentSummaryPromise = tx.paymentSummary.upsert({
        where: { userId },
        update: {},
        create: { userId },
      });;

      const [cart, paymentSummary] = await Promise.all([
        cartPromise,
        paymentSummaryPromise,
      ]);

      if (!cart || cart.items.length === 0) {
        return { submissionId: crypto.randomUUID(), error: 'Cart is empty' };
      }

      if (typeof paymentSummary.total !== 'number') {
        return { submissionId: crypto.randomUUID(), error: 'Something went wrong' };
      }

      await tx.order.create({
        data: {
          userId,
          total: paymentSummary.total,
          status: 'pending',

          items: {
            create: cart.items.map((item) => ({
              productId: item.productId,
              quantity: item.quantity,
              price: item.product.priceCents
            }))
          }
        },
        include: {
          items: true
        }
      });

      await tx.cart.delete({ where: { userId } });

      await tx.paymentSummary.delete({ where: { userId } });

    });

    if (result?.error) {
      return result;
    }

    redirect('/orders');

  } catch (error) {
    if ((error as any).message === 'NEXT_REDIRECT') {
      throw error;
    }
    throw new Error('Order creation failed: ' + (error as any).message);
  }

}

