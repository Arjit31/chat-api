-- AlterTable
ALTER TABLE "PersonalMessage" ADD COLUMN     "contactId" TEXT;

-- AddForeignKey
ALTER TABLE "PersonalMessage" ADD CONSTRAINT "PersonalMessage_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "UserContact"("id") ON DELETE SET NULL ON UPDATE CASCADE;
