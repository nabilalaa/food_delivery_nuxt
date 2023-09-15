-- CreateTable
CREATE TABLE "Meals" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "Meals_pkey" PRIMARY KEY ("id")
);
