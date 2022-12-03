/*
  Warnings:

  - You are about to drop the column `nextUpdate` on the `reports` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "reports" RENAME COLUMN "nextUpdate" TO "next_update";
