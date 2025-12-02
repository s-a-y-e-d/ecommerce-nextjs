import { getCartItemsData, getPaymentSummeryData } from '@/lib/data';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import { CartItem, PaymentSummary, Product } from '../../generated/prisma';
import ClientPage from './ClientPage';
import './styles/CheckoutPage.css'
import './styles/CartHeader.module.css'

type CartItemWithProduct = CartItem & {
  product: Product;
};

type CartItems = CartItemWithProduct[];


export default async function CheckoutPage() {

  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect('/auth');
  }

  const userId = session.user.id;

  const cartItemsPromise = getCartItemsData(userId) as Promise<CartItems>;
  const paymentSummeryPromise = getPaymentSummeryData(userId) as Promise<PaymentSummary>;

  const [cartItems, paymentSummery] = await Promise.all([
    cartItemsPromise,
    paymentSummeryPromise,
  ]);

  return (
    <>
      <title>Checkout</title>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">

          <ClientPage cartItems={cartItems} paymentSummery={paymentSummery} />

        </div>
      </div>
    </>
  )

}
