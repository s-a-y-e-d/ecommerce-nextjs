import { Plus } from 'lucide-react'
import List from './List'
import { getProductsData } from '@/lib/data';
import { Product } from '@/app/generated/prisma';
import Link from 'next/link';

export default async function ProductListPage() {
  const products = await getProductsData() as Product[];
  return (
    <div className="min-h-screen bg-background text-foreground p-8 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products</h1>
          <p className="text-muted-foreground mt-1">Manage your product inventory</p>
        </div>
        <div className="flex gap-3">
          <Link href={'/admin/product/add'} className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-colors text-sm font-medium">
            <Plus size={16} />
            Add Product
          </Link>
        </div>
      </div>

      {/* Table Container */}
      <List products={products} />
    </div>
  )
}
