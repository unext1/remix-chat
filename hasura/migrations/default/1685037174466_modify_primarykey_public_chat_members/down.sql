alter table "public"."chat_members" drop constraint "chat_members_pkey";
alter table "public"."chat_members"
    add constraint "chat_members_pkey"
    primary key ("user_id");
