/*
  Warnings:

  - You are about to drop the column `deliveryOptionId` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `deliveryOptionId` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `priceCents` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the `DeliveryOption` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `price` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."CartItem" DROP CONSTRAINT "CartItem_deliveryOptionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."OrderItem" DROP CONSTRAINT "OrderItem_deliveryOptionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."OrderItem" DROP CONSTRAINT "OrderItem_orderId_fkey";

-- AlterTable
ALTER TABLE "CartItem" DROP COLUMN "deliveryOptionId";

-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "deliveryOptionId",
DROP COLUMN "priceCents",
ADD COLUMN     "price" INTEGER NOT NULL,
ALTER COLUMN "quantity" SET DEFAULT 1;

-- DropTable
DROP TABLE "public"."DeliveryOption";

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
