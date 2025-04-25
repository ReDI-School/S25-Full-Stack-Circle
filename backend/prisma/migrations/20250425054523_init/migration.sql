-- CreateTable
CREATE TABLE "Reactions" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "pinId" TEXT NOT NULL,

    CONSTRAINT "Reactions_pkey" PRIMARY KEY ("id")
);
