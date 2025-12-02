"use server"

import { cacheTag, revalidateTag } from "next/cache";
import prisma from "./prisma";
import { redirect } from "next/navigation";

export async function getCartData(userId: string, includeProducts = true) {
  if (!userId) {
    redirect('/auth');
  }

  const cart = await prisma.cart.upsert({
    where: { userId: userId },
    update: {},
    create: { userId: userId },
    include: {
      items: {
        include: {
          product: includeProducts,
        },
      },
    },
  });

  return cart;
}

export async function getCartItemsData(userId: string, includeProducts = true) {
  if (!userId) {
    redirect('/auth');
  }
  try {
    const cartItems = await prisma.cartItem.findMany({
      where: {
        cart: {
          userId: userId,
        },
      },
      include: {
        product: includeProducts,
      },
    });
    return cartItems;
  } catch (e) {
    return e;
  }

}

export async function searchProducts(query: string) {
  "use cache"
  if (!query) return [];

  return await prisma.product.findMany({
    where: {
      name: {
        contains: query,
        mode: 'insensitive',
      },
    },
    take: 5,
  });
}


export async function getProductsData() {
  "use cache"
  cacheTag('allProducts')
  return await prisma.product.findMany();
};


export async function getPaymentSummeryData(userId: string) {
  try {
    return await prisma.paymentSummary.upsert({
      where: { userId },
      update: {},
      create: { userId },
    });
  } catch (e) {

  }

}

export async function getProductBySlug(slug: string) {
  "use cache"
  cacheTag('product')
  return prisma.product.findFirst({ where: { slug } });
}

export async function getOrdersData(userId: string) {
  try {
    const orders = await prisma.order.findMany({
      where: {
        userId: userId,
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return orders;
  } catch (e) {
    throw new Error('Something went Wrong:' + (e as any).message);
  }
}