import axios from 'axios';
import dayjs from 'dayjs';
import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import formateMoney from '../utiles/money';
import './OrdersPage.css';

export default async function OrdersPage({ cart }) {


  const response = await axios.get(
    'http://localhost:3000/api/orders?expand=products'
  );
  const orders = response.data;

  return (
    <>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">

          {orders.map((order) => {

            return (

              <div key={order.id} className="order-container">

                <div className="order-header">
                  <div className="order-header-left-section">
                    <div className="order-date">
                      <div className="order-header-label">Order Placed:</div>
                      <div>{dayjs(order.orderTimeMs).format('MMMM d')}</div>
                    </div>
                    <div className="order-total">
                      <div className="order-header-label">Total:</div>
                      <div>${formateMoney(order.totalCostCents)}</div>
                    </div>
                  </div>

                  <div className="order-header-right-section">
                    <div className="order-header-label">Order ID:</div>
                    <div>{order.id}</div>
                  </div>
                </div>

                <div className="order-details-grid">
                  {order.products.map((orderProduct) => {
                    return (
                      <Fragment key={orderProduct.product.id}>
                        <div className="product-image-container">
                          <Image height={110} width={110} alt='product-image' src={`/${orderProduct.product.image}`} />
                        </div>

                        <div className="product-details">
                          <div className="product-name">
                            {orderProduct.product.name}
                          </div>
                          <div className="product-delivery-date">
                            Arriving on: {dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMMM d')}
                          </div>
                          <div className="product-quantity">
                            Quantity: {orderProduct.quantity}
                          </div>
                          <button className="buy-again-button button-primary">
                            <Image
                              height={17.77} width={20}
                              alt='buy-again-button' className="buy-again-icon"
                              src="/images/icons/buy-again.png" />
                            <span className="buy-again-message">Add to Cart</span>
                          </button>
                        </div>

                        <div className="product-actions">
                          <Link href="/tracking">
                            <button className="track-package-button button-secondary">
                              Track package
                            </button>
                          </Link>
                        </div>
                      </Fragment>
                    )
                  })}

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}