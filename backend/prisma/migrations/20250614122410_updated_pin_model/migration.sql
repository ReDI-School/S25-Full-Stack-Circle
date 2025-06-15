-- AlterTable
ALTER TABLE "Pin" ADD COLUMN     "isAllowedtoComment" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "showSimilarProduct" BOOLEAN NOT NULL DEFAULT true;
