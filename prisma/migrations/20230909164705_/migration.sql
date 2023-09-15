/*
  Warnings:

  - Added the required column `category` to the `Meals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Meals" ADD COLUMN     "category" TEXT NOT NULL;
