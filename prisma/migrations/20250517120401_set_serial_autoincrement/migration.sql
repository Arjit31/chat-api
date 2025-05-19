-- AlterTable
CREATE SEQUENCE broadcastmessage_serialno_seq;
ALTER TABLE "BroadcastMessage" ALTER COLUMN "serialNo" SET DEFAULT nextval('broadcastmessage_serialno_seq');
ALTER SEQUENCE broadcastmessage_serialno_seq OWNED BY "BroadcastMessage"."serialNo";
