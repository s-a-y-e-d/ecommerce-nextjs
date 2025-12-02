import prisma from '@/lib/prisma'
import formateMoney from '@/lib/utiles/money'
import React from 'react'

export default async function OrderListPage() {
  const orders = await prisma.order.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="border border-border rounded-lg overflow-hidden bg-card">
        <div className="p-4 border-b border-border">
          <h5 className="font-semibold leading-none tracking-tight">Orders</h5>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b border-border sticky top-0 z-10 backdrop-blur-sm">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium">Order ID</th>
                <th scope="col" className="px-6 py-3 font-medium">Created At</th>
                <th scope="col" className="px-6 py-3 font-medium">User ID</th>
                <th scope="col" className="px-6 py-3 font-medium">Status</th>
                <th scope="col" className="px-6 py-3 font-medium text-right">Total Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-muted/50 transition-colors group">
                  <td className="px-6 py-4 font-mono text-xs text-muted-foreground">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 text-foreground">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-muted-foreground">
                    {order.userId}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${order.status === 'completed'
                        ? 'bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20'
                        : order.status === 'pending'
                          ? 'bg-yellow-50 text-yellow-800 ring-yellow-600/20 dark:bg-yellow-500/10 dark:text-yellow-400 dark:ring-yellow-500/20'
                          : 'bg-gray-50 text-gray-600 ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20'
                      }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-medium text-foreground">
                    {`$${formateMoney(order.total)}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
