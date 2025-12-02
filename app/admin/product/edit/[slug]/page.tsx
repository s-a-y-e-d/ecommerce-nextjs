import ProductForm from "@/app/admin/components/product-form";
import { getProductBySlug, getProductsData } from "@/lib/data";
import { updateProduct } from "@/lib/utiles/actions";
import { Suspense } from "react";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {

  const { slug: productSlug } = await params;
  const product = await getProductBySlug(productSlug);

  if (!product) {
    return <div>Product not found</div>;
  }
  const defaultValues = {
    name: product.name as string,
    id: product.id as string,
    price: product.priceCents as number,
    slug: product.slug as string,
    stock: product.stock as number,
    category: product.category as string | undefined,
    description: product.description as string,
    image: product.image as string,
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Update Product</h1>
      <Suspense>
        <ProductForm action={updateProduct.bind(null, product.id)} defaultValues={defaultValues} />
      </Suspense>

    </div>
  );
}