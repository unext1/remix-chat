BEGIN TRANSACTION;
ALTER TABLE "public"."chat_members" DROP CONSTRAINT "chat_members_pkey";

ALTER TABLE "public"."chat_members"
    ADD CONSTRAINT "chat_members_pkey" PRIMARY KEY ("user_id", "chat_id");
COMMIT TRANSACTION;
