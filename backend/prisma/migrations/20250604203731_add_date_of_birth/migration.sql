/*
  Warnings:

  - You are about to drop the `SavedPin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SavedPin" DROP CONSTRAINT "SavedPin_pinId_fkey";

-- DropForeignKey
ALTER TABLE "SavedPin" DROP CONSTRAINT "SavedPin_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "dateOfBirth" TIMESTAMP(3);

-- DropTable
DROP TABLE "SavedPin";
