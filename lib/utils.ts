import { Order, OrderItem } from "@/app/generated/prisma";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function countOrdersByMonth(orders: Order[]) {
  const now = new Date();

  // This month range
  const startOfThisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);

  // Previous month range
  const startOfPrevMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const startOfThisMonthAgain = startOfThisMonth; // for clarity

  let thisMonthCount = 0;
  let lastMonthCount = 0;

  for (const order of orders) {
    const date = new Date(order.createdAt);

    if (date >= startOfThisMonth && date < startOfNextMonth) {
      thisMonthCount++;
    }

    if (date >= startOfPrevMonth && date < startOfThisMonthAgain) {
      lastMonthCount++;
    }
  }

  return { thisMonthCount, lastMonthCount };
}

export function getMostOrderedProducts(orderItems: OrderItem[]) {
  const countMap = {};

  for (const item of orderItems) {
    const id = item.productId;

    countMap[id] = (countMap[id] || 0) + 1;
  }

  // convert to array for sorting
  return Object.entries(countMap)
    .map(([productId, count]) => ({ productId, count }))
    .sort((a, b) => b.count - a.count); // highest first
}

