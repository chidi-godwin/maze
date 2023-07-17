-- CreateTable
CREATE TABLE "Club" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT,
    "rating" DOUBLE PRECISION,
    "category" TEXT,
    "logo" TEXT,
    "website" TEXT,
    "html_logo" TEXT,
    "keyword" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "Club_pkey" PRIMARY KEY ("id")
);
