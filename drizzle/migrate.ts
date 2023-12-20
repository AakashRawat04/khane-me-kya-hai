import drizzleConfig from "@/drizzle.config"
import { db } from "@/utils/db"
import { migrate } from "drizzle-orm/vercel-postgres/migrator"

const main = async () => {
  try {
    console.log("\x1b[32mApplying Migration Changes...\x1b[0m")
    await migrate(db, { migrationsFolder: drizzleConfig.out! })
    console.log("\x1b[32mMigration Changes Applied Successfully!\x1b[0m")
    process.exit(0)
  } catch (error) {
    console.error(
      "\x1b[31mError While Applying Migration Changes:\x1b[0m",
      error
    )
  }
}

main()
