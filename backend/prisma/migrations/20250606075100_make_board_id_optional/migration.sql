/*
  Warnings:

  - You are about to drop the `SavedPin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pin" DROP CONSTRAINT "Pin_boardId_fkey";

-- DropForeignKey
ALTER TABLE "SavedPin" DROP CONSTRAINT "SavedPin_pinId_fkey";

-- DropForeignKey
ALTER TABLE "SavedPin" DROP CONSTRAINT "SavedPin_userId_fkey";

-- AlterTable
ALTER TABLE "Pin" ALTER COLUMN "boardId" DROP NOT NULL;

-- DropTable
DROP TABLE "SavedPin";

-- AddForeignKey
ALTER TABLE "Pin" ADD CONSTRAINT "Pin_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE SET NULL ON UPDATE CASCADE;
