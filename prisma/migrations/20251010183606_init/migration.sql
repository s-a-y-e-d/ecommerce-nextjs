-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ratingStars" REAL NOT NULL,
    "ratingCount" INTEGER NOT NULL,
    "priceCents" INTEGER NOT NULL,
    "keywords" JSONB
);

-- CreateTable
CREATE TABLE "Cart" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "qantity" INTEGER NOT NULL,
    "deliveryoptionId" TEXT,
    CONSTRAINT "Cart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Cart_deliveryoptionId_fkey" FOREIGN KEY ("deliveryoptionId") REFERENCES "DeliveryOption" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DeliveryOption" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "deliveryDays" INTEGER NOT NULL,
    "priceCents" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Cart_productId_key" ON "Cart"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "DeliveryOption_deliveryDays_key" ON "DeliveryOption"("deliveryDays");

-- CreateIndex
CREATE UNIQUE INDEX "DeliveryOption_priceCents_key" ON "DeliveryOption"("priceCents");
