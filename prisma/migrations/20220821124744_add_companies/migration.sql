-- CreateTable
CREATE TABLE "companies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "shortcut" TEXT NOT NULL,
    "since" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "sector_id" INTEGER NOT NULL,
    "isin" TEXT NOT NULL,
    "treasury" DOUBLE PRECISION NOT NULL,
    "market_value" DOUBLE PRECISION NOT NULL,
    "updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "companies_name_key" ON "companies"("name");

-- CreateIndex
CREATE UNIQUE INDEX "companies_shortcut_key" ON "companies"("shortcut");

-- CreateIndex
CREATE UNIQUE INDEX "companies_isin_key" ON "companies"("isin");

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_sector_id_fkey" FOREIGN KEY ("sector_id") REFERENCES "sectors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
