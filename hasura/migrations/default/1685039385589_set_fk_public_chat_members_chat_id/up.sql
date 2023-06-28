alter table "public"."chat_members" drop constraint "chat_members_chat_id_fkey",
  add constraint "chat_members_chat_id_fkey"
  foreign key ("chat_id")
  references "public"."chat"
  ("id") on update cascade on delete cascade;
