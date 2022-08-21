-- CreateTable
CREATE TABLE "sectors" (
    "id" SERIAL NOT NULL,
    "sector_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "sectors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sectors_sector_id_key" ON "sectors"("sector_id");
