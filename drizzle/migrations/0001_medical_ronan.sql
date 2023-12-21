ALTER TABLE "breakfast" ALTER COLUMN "dishes" SET DATA TYPE varchar[];--> statement-breakpoint
ALTER TABLE "breakfast" ALTER COLUMN "dishes" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "dinner" ALTER COLUMN "dishes" SET DATA TYPE varchar[];--> statement-breakpoint
ALTER TABLE "dinner" ALTER COLUMN "dishes" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "lunch" ALTER COLUMN "dishes" SET DATA TYPE varchar[];--> statement-breakpoint
ALTER TABLE "lunch" ALTER COLUMN "dishes" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "snack" ALTER COLUMN "dishes" SET DATA TYPE varchar[];--> statement-breakpoint
ALTER TABLE "snack" ALTER COLUMN "dishes" DROP NOT NULL;