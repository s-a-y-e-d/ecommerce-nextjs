/*
  Warnings:

  - Made the column `deliveryoptionId` on table `Cart` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."Cart" DROP CONSTRAINT "Cart_deliveryoptionId_fkey";

-- AlterTable
ALTER TABLE "Cart" ALTER COLUMN "deliveryoptionId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_deliveryoptionId_fkey" FOREIGN KEY ("deliveryoptionId") REFERENCES "DeliveryOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
