import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

/** Adds the logo, footer logo and favicon fields to Site settings. */
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "site_settings" ADD COLUMN "logo_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "footer_logo_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "favicon_id" integer;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_footer_logo_id_media_id_fk" FOREIGN KEY ("footer_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_favicon_id_media_id_fk" FOREIGN KEY ("favicon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "site_settings_logo_idx" ON "site_settings" USING btree ("logo_id");
  CREATE INDEX "site_settings_footer_logo_idx" ON "site_settings" USING btree ("footer_logo_id");
  CREATE INDEX "site_settings_favicon_idx" ON "site_settings" USING btree ("favicon_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "site_settings" DROP CONSTRAINT IF EXISTS "site_settings_logo_id_media_id_fk";
  ALTER TABLE "site_settings" DROP CONSTRAINT IF EXISTS "site_settings_footer_logo_id_media_id_fk";
  ALTER TABLE "site_settings" DROP CONSTRAINT IF EXISTS "site_settings_favicon_id_media_id_fk";
  DROP INDEX IF EXISTS "site_settings_logo_idx";
  DROP INDEX IF EXISTS "site_settings_footer_logo_idx";
  DROP INDEX IF EXISTS "site_settings_favicon_idx";
  ALTER TABLE "site_settings" DROP COLUMN IF EXISTS "logo_id";
  ALTER TABLE "site_settings" DROP COLUMN IF EXISTS "footer_logo_id";
  ALTER TABLE "site_settings" DROP COLUMN IF EXISTS "favicon_id";`)
}
