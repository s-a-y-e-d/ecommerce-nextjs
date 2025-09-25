"use client"
export default function DeliveryOptionInput({deliveryOption, cartItem}) {
  return (
    <input type="radio"
      checked={deliveryOption.id === cartItem.deliveryOptionId}
      onChange={() => { }}
      className="delivery-option-input"
      name={`delivery-option-${cartItem.productId}`} />
  )
}