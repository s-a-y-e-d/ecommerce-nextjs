"use client"
import { Cart } from "../generated/prisma";
import { deleteCartItem } from "../utiles/actions";
export default function DeleteCartItem({ cartItem }: { cartItem: Cart }) {

  return (
    <span className="delete-quantity-link link-primary"
      onClick={() => { deleteCartItem(cartItem) }}
    >
      Delete
    </span>
  )
}