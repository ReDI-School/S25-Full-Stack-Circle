/*
  Warnings:

  - Added the required column `boardId` to the `Pin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pin" ADD COLUMN     "altText" TEXT,
ADD COLUMN     "boardId" INTEGER NOT NULL,
ADD COLUMN     "isAllowedtoComment" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "link" TEXT,
ADD COLUMN     "showSimilarProduct" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "title" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Board" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Board_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RelatedPins" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_RelatedPins_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_PinTags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PinTags_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Board_userId_key" ON "Board"("userId");

-- CreateIndex
CREATE INDEX "_RelatedPins_B_index" ON "_RelatedPins"("B");

-- CreateIndex
CREATE INDEX "_PinTags_B_index" ON "_PinTags"("B");

-- AddForeignKey
ALTER TABLE "Pin" ADD CONSTRAINT "Pin_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RelatedPins" ADD CONSTRAINT "_RelatedPins_A_fkey" FOREIGN KEY ("A") REFERENCES "Pin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RelatedPins" ADD CONSTRAINT "_RelatedPins_B_fkey" FOREIGN KEY ("B") REFERENCES "Pin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PinTags" ADD CONSTRAINT "_PinTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Pin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PinTags" ADD CONSTRAINT "_PinTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
