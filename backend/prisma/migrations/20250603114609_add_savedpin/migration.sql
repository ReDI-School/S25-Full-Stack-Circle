-- CreateTable
CREATE TABLE "SavedPin" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "pinId" INTEGER NOT NULL,
    "savedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SavedPin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SavedPin_userId_pinId_key" ON "SavedPin"("userId", "pinId");

-- AddForeignKey
ALTER TABLE "SavedPin" ADD CONSTRAINT "SavedPin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavedPin" ADD CONSTRAINT "SavedPin_pinId_fkey" FOREIGN KEY ("pinId") REFERENCES "Pin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
