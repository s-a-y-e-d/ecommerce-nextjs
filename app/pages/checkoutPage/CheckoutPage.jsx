import axios from 'axios'
import dayjs from 'dayjs'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { formateMoney } from '../../utilities/money'
import './checkout-header.css'
import './CheckoutPage.css'
import { DeliveryOption } from './DeliveryOption'
import { PaymentSummery } from './PaymentSummery'

export function CheckoutPage({ cart, loadCartData }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummery, setPaymentSummery] = useState(null);

  useEffect(() => {
    const getDeliveryOptionsData = async() => {
     const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
      setDeliveryOptions(response.data);
    }
    getDeliveryOptionsData();

    const getPaymentSummeryData = async () => {
      const response = await axios.get('/api/payment-summary');
      setPaymentSummery(response.data);
    }
    getPaymentSummeryData();
  }, [cart]);

  return (
    <>
      <title>Checkout</title>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<Link className="return-to-home-link"
              to="/">3 items</Link>)
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <div className="order-summary">
            {cart.map((cartItem) => {

              const selectedDeliveryOption = deliveryOptions
                .find((deliveryOption) => {
                  return ((deliveryOption.id) === (cartItem.deliveryOptionId));
                });

              const deleteCartItem = async () => {
                await axios.delete(`/api/cart-items/${cartItem.productId}`);
                loadCartData();
              };

              return (
                <div key={cartItem.productId} className="cart-item-container">
                  <div className="delivery-date">
                    Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(('dddd,MMMM D'))}
                  </div>

                  <div className="cart-item-details-grid">
                    <img className="product-image"
                      src={cartItem.product.image} />

                    <div className="cart-item-details">
                      <div className="product-name">
                        {cartItem.product.name}
                      </div>
                      <div className="product-price">
                        {`$${formateMoney(cartItem.product.priceCents)}`}
                      </div>
                      <div className="product-quantity">
                        <span>
                          Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                        </span>
                        <span className="update-quantity-link link-primary">
                          Update
                        </span>
                        <span className="delete-quantity-link link-primary"
                          onClick={deleteCartItem}
                        >
                          Delete
                        </span>
                      </div>
                    </div>

                    <div className="delivery-options">
                      <div className="delivery-options-title">
                        Choose a delivery option:
                      </div>
                      {deliveryOptions.map((deliveryOption) => {
                        return (
                          <DeliveryOption key={deliveryOption.id} deliveryOption={deliveryOption} cartItem={cartItem} loadCartData={loadCartData}/>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )

            })}
          </div>

          {paymentSummery && (
            <PaymentSummery paymentSummery={paymentSummery} loadCartData={loadCartData}/>
          )}

        </div>
      </div>
    </>
  )

}