/*
  Warnings:

  - You are about to drop the column `ZScore` on the `reports` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "reports" RENAME COLUMN "ZScore" TO "z_score";
