/*
  Warnings:

  - You are about to drop the column `deliveryoptionId` on the `Cart` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Cart" DROP CONSTRAINT "Cart_deliveryoptionId_fkey";

-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "deliveryoptionId";

-- AlterTable
ALTER TABLE "CartItem" ADD COLUMN     "deliveryoptionId" INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_deliveryoptionId_fkey" FOREIGN KEY ("deliveryoptionId") REFERENCES "DeliveryOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
