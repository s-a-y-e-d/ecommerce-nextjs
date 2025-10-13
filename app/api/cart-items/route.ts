import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cart = await prisma.cart.findMany();

    const totalQuantity = cart.reduce((quantity, cartItem) => {
      return quantity + cartItem.quantity;
    }, 0);

    return NextResponse.json({ totalQuantity });
  } catch (error) {
    console.error("GET /api/cart error:", error);
    return NextResponse.json(0);
  }


}