-- DropForeignKey
ALTER TABLE "BroadcastMessage" DROP CONSTRAINT "BroadcastMessage_userId_fkey";

-- DropForeignKey
ALTER TABLE "PersonalMessage" DROP CONSTRAINT "PersonalMessage_fromUserId_fkey";

-- DropForeignKey
ALTER TABLE "PersonalMessage" DROP CONSTRAINT "PersonalMessage_toUserId_fkey";

-- AddForeignKey
ALTER TABLE "BroadcastMessage" ADD CONSTRAINT "BroadcastMessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonalMessage" ADD CONSTRAINT "PersonalMessage_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonalMessage" ADD CONSTRAINT "PersonalMessage_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
