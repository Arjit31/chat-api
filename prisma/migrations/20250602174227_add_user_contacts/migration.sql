-- DropForeignKey
ALTER TABLE "Token" DROP CONSTRAINT "Token_userId_fkey";

-- CreateTable
CREATE TABLE "UserContact" (
    "id" TEXT NOT NULL,
    "userId1" TEXT NOT NULL,
    "userId2" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserContact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "UserContact_userId1_idx" ON "UserContact"("userId1");

-- CreateIndex
CREATE INDEX "UserContact_userId2_idx" ON "UserContact"("userId2");

-- CreateIndex
CREATE UNIQUE INDEX "UserContact_userId1_userId2_key" ON "UserContact"("userId1", "userId2");

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserContact" ADD CONSTRAINT "UserContact_userId1_fkey" FOREIGN KEY ("userId1") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserContact" ADD CONSTRAINT "UserContact_userId2_fkey" FOREIGN KEY ("userId2") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
