-- CreateTable
CREATE TABLE "PaymentSummery" (
    "id" TEXT NOT NULL,
    "ItemsTotalPrice" INTEGER NOT NULL,
    "ShippingPrice" INTEGER NOT NULL,

    CONSTRAINT "PaymentSummery_pkey" PRIMARY KEY ("id")
);
