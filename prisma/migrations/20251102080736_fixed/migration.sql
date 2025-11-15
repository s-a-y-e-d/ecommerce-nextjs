/*
  Warnings:

  - You are about to drop the column `deliveryoptionId` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `paymentSummeryId` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `PaymentSummary` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `PaymentSummary` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."CartItem" DROP CONSTRAINT "CartItem_deliveryoptionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."user" DROP CONSTRAINT "user_paymentSummeryId_fkey";

-- DropIndex
DROP INDEX "public"."user_paymentSummeryId_key";

-- AlterTable
ALTER TABLE "CartItem" DROP COLUMN "deliveryoptionId",
ADD COLUMN     "deliveryOptionId" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "PaymentSummary" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "ratingStars" SET DEFAULT 0,
ALTER COLUMN "ratingCount" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "paymentSummeryId";

-- CreateIndex
CREATE UNIQUE INDEX "PaymentSummary_userId_key" ON "PaymentSummary"("userId");

-- CreateIndex
CREATE INDEX "Product_slug_idx" ON "Product"("slug");

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_deliveryOptionId_fkey" FOREIGN KEY ("deliveryOptionId") REFERENCES "DeliveryOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentSummary" ADD CONSTRAINT "PaymentSummary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
