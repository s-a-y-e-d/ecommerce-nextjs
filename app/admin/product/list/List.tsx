'use client'
import { Product } from "@/app/generated/prisma";
import formateMoney from "@/lib/utiles/money";
import { MoreVertical, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function ProductList({ products }: { products: Product[] }) {

  const [search, setSearch] = useState('');

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card" >
      {/* Toolbar */}
      <div className="p-4 border-b border-border flex items-center justify-between" >
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
          <input
            onChange={(e) => { setSearch(e.target.value) }}
            type="text"
            placeholder="Search products by id..."
            className="w-full bg-input border border-border text-foreground pl-10 pr-4 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-ring placeholder:text-muted-foreground"
          />
        </div>
        <div className="flex items-center gap-2">
        </div>
      </div >

      {/* Table */}
      <div className="overflow-x-auto" >
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b border-border sticky top-0 z-10 backdrop-blur-sm">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">Product</th>
              <th scope="col" className="px-6 py-3 font-medium hidden md:table-cell">ID</th>
              <th scope="col" className="px-6 py-3 font-medium">Price</th>
              <th scope="col" className="px-6 py-3 font-medium hidden sm:table-cell">Stock</th>
              <th scope="col" className="px-6 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {products.filter((product) => {
              return search.toLowerCase() === ''
                ? product
                : product.id.toLowerCase().includes(search.toLowerCase())
            }).map((product) => (
              <tr key={product.id} className="hover:bg-muted/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-10 w-10 rounded-md overflow-hidden bg-muted border border-border flex-shrink-0">
                      <Image
                        src={product.image.startsWith('http') || product.image.startsWith('/') ? product.image : `/${product.image}`}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{product.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-muted-foreground font-mono text-xs hidden md:table-cell">
                  {product.id}
                </td>
                <td className="px-6 py-4 text-foreground font-medium">
                  {`$${formateMoney(product.priceCents)}`}
                </td>
                <td className="px-6 py-4 hidden sm:table-cell">
                  <span className="text-foreground">{product.stock}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="text-muted-foreground hover:text-foreground p-1 rounded-md hover:bg-muted transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="dark">
                      <DropdownMenuItem asChild>
                        <Link href={`/admin/product/edit/${product.slug}`}>
                          Edit
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div >
    </div >

  );
}