CREATE TABLE IF NOT EXISTS "breakfast" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"dayno" integer NOT NULL,
	"dishes" integer[] NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "days" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"dayNumber" integer NOT NULL,
	"dayName" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "dinner" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"dayno" integer NOT NULL,
	"dishes" integer[] NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "dishes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"dislikes" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "lunch" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"dayno" integer NOT NULL,
	"dishes" integer[] NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "snack" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"dayno" integer NOT NULL,
	"dishes" integer[] NOT NULL
);
