"use client";

import { addToCart } from "@/lib/utiles/actions";
import { ChangeEvent, useState, useEffect, useRef } from "react";
import styles from "./InputTaker.module.css";
import { useActionState } from "react";
import toast from "react-hot-toast";

export default function InputTaker({ product }: { product: { id: string } }) {

  const [quantity, setQuantity] = useState(1);


  const [state, formAction, isPending] = useActionState(addToCart, null);

  const lastSubmissionId = useRef<string | null>(null);

  useEffect(() => {

    if (!state?.submissionId) return;

    if (state?.submissionId === lastSubmissionId.current) return;

    lastSubmissionId.current = state.submissionId;

    if (state.error) {
      toast.error(state.error || "Failed to add to cart", { duration: 1500 });
    } else {
      toast.success("Added to cart", { duration: 1500 });
    }
  }, [state]);

  const selectQuantity = (event: ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(event.target.value));
  };

  return (
    <>
      <div className={styles.productQuantityContainer}>
        <select value={quantity} onChange={selectQuantity}>
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        </select>
      </div>

      <div className="product-spacer"></div>

      <form action={formAction}>
        <input type="hidden" name="productId" value={product.id} />
        <input type="hidden" name="quantity" value={quantity} />

        <button
          className={`${styles.addToCartButton} button-primary`}
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Adding..." : "Add to Cart"}
        </button>
      </form>
    </>
  );
}
