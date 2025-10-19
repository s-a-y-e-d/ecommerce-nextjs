import { unstable_cache } from "next/cache";
import prisma from "./prisma";

export async function getCartData(includeProduct: boolean, includeDeliveryOption: boolean) {
  return prisma.cart.findMany({
    include: {
      product: includeProduct,
      deliveryOption: includeDeliveryOption,
    },
  });
}
export const getProductsData = unstable_cache(() => {
  return prisma.product.findMany();
});

export async function getPaymentSummeryData() {
  return prisma.paymentSummery.findFirstOrThrow();
}
