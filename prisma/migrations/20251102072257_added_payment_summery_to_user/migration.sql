/*
  Warnings:

  - You are about to drop the `PaymentSummery` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[paymentSummeryId]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentSummeryId` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'pending',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "paymentSummeryId" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."PaymentSummery";

-- CreateTable
CREATE TABLE "PaymentSummary" (
    "id" TEXT NOT NULL,
    "itemsTotalPrice" INTEGER NOT NULL DEFAULT 0,
    "shippingPrice" INTEGER NOT NULL DEFAULT 0,
    "totalBeforeTax" INTEGER NOT NULL DEFAULT 0,
    "tax" INTEGER NOT NULL DEFAULT 0,
    "total" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "PaymentSummary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_paymentSummeryId_key" ON "user"("paymentSummeryId");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_paymentSummeryId_fkey" FOREIGN KEY ("paymentSummeryId") REFERENCES "PaymentSummary"("id") ON DELETE CASCADE ON UPDATE CASCADE;
