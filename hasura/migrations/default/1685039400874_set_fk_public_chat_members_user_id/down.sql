alter table "public"."chat_members" drop constraint "chat_members_user_id_fkey",
  add constraint "chat_members_user_id_fkey"
  foreign key ("user_id")
  references "public"."user"
  ("id") on update restrict on delete restrict;
