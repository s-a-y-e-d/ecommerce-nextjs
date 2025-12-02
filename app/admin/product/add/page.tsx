import { addProduct } from '@/lib/utiles/actions';
import ProductForm from '../../components/product-form';

import { Suspense } from 'react';

export default function AddProduct() {
  const defaultValues = {
    name: '',
    id: '',
    price: 0,
    slug: '',
    stock: 0,
    category: '',
    description: '',
    image: '',
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Add Products</h1>
      <Suspense fallback={<div>Loading</div>}>
        <ProductForm action={addProduct} defaultValues={defaultValues} />
      </Suspense>
    </div>
  );
}
