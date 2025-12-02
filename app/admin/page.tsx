import { getOrdersData, getProductsData } from '@/lib/data'
import { DashboardCard } from './components/dashboard-card'
import { TrendingUp, TrendingDown, Activity, DollarSign, Users, Package } from 'lucide-react'

import prisma from '@/lib/prisma'
import formateMoney from '@/lib/utiles/money';
import { countOrdersByMonth, getMostOrderedProducts } from '@/lib/utils';
import { cacheLife } from 'next/cache';

export default async function AdminPage() {
  'use cache'
  cacheLife('minutes');

  const orders = await prisma.order.findMany();
  const totalRevenue = orders.reduce((sum, item) => sum + item.total, 0);
  const products = await getProductsData();
  const users = (await prisma.user.findMany({
    where: { role: 'user' }
  }));

  const { thisMonthCount, lastMonthCount } = countOrdersByMonth(orders);
  const growthRate = (thisMonthCount / lastMonthCount) * 100;
  const orderItems = await prisma.orderItem.findMany();
  const mostOrderedProducts = getMostOrderedProducts(orderItems);
  const topProducts = mostOrderedProducts.slice(0, 10).map(item => {
    const product = products.find(p => p.id === item.productId);
    return {
      ...product,
      count: item.count
    };
  }).filter(item => item.id); // Filter out any undefined products

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total Money"
          value={`$${formateMoney(totalRevenue)}`}
          icon={DollarSign}
        />
        <DashboardCard
          title="Total Costomers"
          value={`${users.length}`}
          icon={Users}
        />
        <DashboardCard
          title="Total Products"
          value={`${products.length}`}
          icon={Package}
        />
        <DashboardCard
          title="Growth Rate"
          value={`${growthRate}%`}
          change={`${growthRate}%`}
          changeType="neutral"
          trend="Steady performance"
          trendIcon={growthRate >= 100 ? TrendingUp : TrendingDown}
          description=""
          icon={Activity}
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="border border-border rounded-lg overflow-hidden bg-card">
          <div className="p-4 border-b border-border">
            <h5 className="font-semibold leading-none tracking-tight">Top Products</h5>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b border-border sticky top-0 z-10 backdrop-blur-sm">
                <tr>
                  <th scope="col" className="px-6 py-3 font-medium">Product</th>
                  <th scope="col" className="px-6 py-3 font-medium hidden md:table-cell">ID</th>
                  <th scope="col" className="px-6 py-3 font-medium">Price</th>
                  <th scope="col" className="px-6 py-3 font-medium hidden sm:table-cell">Stock</th>
                  <th scope="col" className="px-6 py-3 font-medium text-right">Orders</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {topProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-muted/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="relative h-10 w-10 rounded-md overflow-hidden bg-muted border border-border flex-shrink-0">
                          {product.image && (
                            <img
                              src={product.image.startsWith('http') || product.image.startsWith('/') ? product.image : `/${product.image}`}
                              alt={product.name}
                              className="object-cover h-full w-full"
                            />
                          )}
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
                      {`$${formateMoney(product.priceCents || 0)}`}
                    </td>
                    <td className="px-6 py-4 hidden sm:table-cell">
                      <span className="text-foreground">{product.stock}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-foreground font-medium">{product.count as number}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="border border-border rounded-lg overflow-hidden bg-card">
          <div className="p-4 border-b border-border">
            <h5 className="font-semibold leading-none tracking-tight">Low Stock Products</h5>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b border-border sticky top-0 z-10 backdrop-blur-sm">
                <tr>
                  <th scope="col" className="px-6 py-3 font-medium">Product</th>
                  <th scope="col" className="px-6 py-3 font-medium hidden md:table-cell">ID</th>
                  <th scope="col" className="px-6 py-3 font-medium">Price</th>
                  <th scope="col" className="px-6 py-3 font-medium text-right">Stock</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {products.filter(p => p.stock < 10).sort((a, b) => a.stock - b.stock).slice(0, 10).map((product) => (
                  <tr key={product.id} className="hover:bg-muted/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="relative h-10 w-10 rounded-md overflow-hidden bg-muted border border-border flex-shrink-0">
                          {product.image && (
                            <img
                              src={product.image.startsWith('http') || product.image.startsWith('/') ? product.image : `/${product.image}`}
                              alt={product.name}
                              className="object-cover h-full w-full"
                            />
                          )}
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
                      {`$${formateMoney(product.priceCents || 0)}`}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="font-medium text-rose-500">
                        {product.stock}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
