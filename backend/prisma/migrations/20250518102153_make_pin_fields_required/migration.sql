/*
  Warnings:

  - Made the column `authorId` on table `Pin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `imageUrl` on table `Pin` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Pin" DROP CONSTRAINT "Pin_authorId_fkey";

-- AlterTable
ALTER TABLE "Pin" ALTER COLUMN "authorId" SET NOT NULL,
ALTER COLUMN "imageUrl" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Pin" ADD CONSTRAINT "Pin_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
