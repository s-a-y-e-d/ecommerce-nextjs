/*
  Warnings:

  - You are about to drop the column `ItemsTotalPrice` on the `PaymentSummery` table. All the data in the column will be lost.
  - You are about to drop the column `ShippingPrice` on the `PaymentSummery` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PaymentSummery" DROP COLUMN "ItemsTotalPrice",
DROP COLUMN "ShippingPrice",
ADD COLUMN     "itemsTotalPrice" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "shippingPrice" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "tax" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "total" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "totalBeforeTax" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "cartId" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
