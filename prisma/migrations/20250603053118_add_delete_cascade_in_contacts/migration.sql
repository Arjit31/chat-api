-- DropForeignKey
ALTER TABLE "PersonalMessage" DROP CONSTRAINT "PersonalMessage_contactId_fkey";

-- AddForeignKey
ALTER TABLE "PersonalMessage" ADD CONSTRAINT "PersonalMessage_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "UserContact"("id") ON DELETE CASCADE ON UPDATE CASCADE;
