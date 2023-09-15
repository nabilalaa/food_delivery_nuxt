/*
  Warnings:

  - Added the required column `image` to the `Meals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Meals" ADD COLUMN     "image" TEXT NOT NULL;
