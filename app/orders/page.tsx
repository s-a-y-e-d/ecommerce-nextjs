import { redirect } from "next/navigation";
import "./order.css";
import formateMoney from "@/lib/utiles/money";
import Link from "next/link";
import { getSession } from "@/lib/utiles/auth-action";
import { getOrdersData } from "@/lib/data";
import { Order, OrderItem, Product } from "../generated/prisma";
import Image from "next/image";
type OrderItemWithProduct = OrderItem & {
  product: Product
};
type OrderWithOrderItem = Order & {
  items: OrderItemWithProduct[]
}
type Orders = OrderWithOrderItem[];

export default async function OrdersPage() {
  const session = await getSession();

  if (!session) {
    redirect("/auth");
  }
  const userId = session.user.id;

  const orders = await getOrdersData(userId) as Orders;

  return (
    <div className="orders-page">
      <div className="orders-header">
        <h1>Your Orders</h1>
      </div>

      <div className="orders-grid">
        {orders.map((order) => {
          return (
            <div key={order.id} className="order-container">
              <div className="order-header-container">
                <div className="order-header-left-section">
                  <div className="order-date">
                    <div className="order-header-label">Order Placed:</div>
                    <div>{order.createdAt.toDateString()}</div>
                  </div>
                  <div className="order-total">
                    <div className="order-header-label">Total:</div>
                    <div>${formateMoney(order.total)}</div>
                  </div>
                  <div className="order-ship-to">
                    <div className="order-header-label">Ship To:</div>
                    <div>{session.user.name}</div>
                  </div>
                </div>

                <div className="order-header-right-section">
                  <div className="order-id">
                    <div className="order-header-label">Order ID:</div>
                    <div>{order.id}</div>
                  </div>
                </div>
              </div>

              {order.items.map((item) => {

                return (
                  <div key={item.id} className="order-item-container">
                    <div className="product-item-grid">
                      <div className="product-image-container">
                        <Image src={`/${item.product.image}`}
                          height={180}
                          width={180}
                          alt='product-image' />
                      </div>
                      <div className="product-details">
                        <div className="product-name">{item.product.name}</div>
                        <div className="product-quantity">
                          Quantity: {item.quantity}
                        </div>
                        <div className="product-price">
                          ${formateMoney(item.price)}
                        </div>
                      </div>
                      <div className="product-actions">
                        <Link href={`/${item.product.slug}`}>
                          <button className="buy-again-button button-primary">
                            <img
                              className="buy-again-icon"
                              src="/images/icons/buy-again.png"
                            />
                            <span className="buy-again-message">
                              Buy it again
                            </span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
