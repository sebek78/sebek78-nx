/*
  Warnings:

  - You are about to drop the `countries` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `provinces` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "countries";

-- DropTable
DROP TABLE "provinces";

-- CreateTable
CREATE TABLE "reports" (
    "id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "group" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "quarter" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "shares_amount" BIGINT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "marketValue" DOUBLE PRECISION NOT NULL,
    "pb" DOUBLE PRECISION NOT NULL,
    "pe" DOUBLE PRECISION NOT NULL,
    "ros" DOUBLE PRECISION NOT NULL,
    "roa" DOUBLE PRECISION NOT NULL,
    "roe" DOUBLE PRECISION NOT NULL,
    "ZScore" DOUBLE PRECISION,
    "nextUpdate" TIMESTAMP(3),

    CONSTRAINT "reports_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
