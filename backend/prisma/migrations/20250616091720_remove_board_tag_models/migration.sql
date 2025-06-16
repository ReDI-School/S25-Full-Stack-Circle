/*
  Warnings:

  - You are about to drop the column `tags` on the `Pin` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pin" DROP COLUMN "tags",
ADD COLUMN     "tag" TEXT[],
ALTER COLUMN "showSimilarProduct" SET DEFAULT false;
