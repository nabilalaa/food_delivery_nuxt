-- CreateTable
CREATE TABLE "Food" (
    "id" SERIAL NOT NULL,
    "cartegory" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("id")
);
