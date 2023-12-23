CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "breakfast" ALTER COLUMN "dishes" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "dinner" ALTER COLUMN "dishes" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "lunch" ALTER COLUMN "dishes" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "snack" ALTER COLUMN "dishes" SET NOT NULL;