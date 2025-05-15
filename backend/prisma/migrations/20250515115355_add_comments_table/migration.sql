/*
  Warnings:

  - Added the required column `msg` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "msg" TEXT NOT NULL;
