import { dayTableData, dishTableData } from "@/drizzle/placeholder-data"
import { dayTabel, dishTable } from "@/schema/schema"
import { db } from "@/utils/db"
import { config } from "dotenv"

config()

async function seed() {
  try {
    console.log("\x1b[32mSeeding database...\x1b[0m")
    const startTime = new Date().getTime()

    await db.insert(dishTable).values(dishTableData)
    const dishTableTime = new Date().getTime() - startTime
    console.log(
      "\x1b[32mDish table seeded successfully. Time taken:",
      dishTableTime,
      "ms\x1b[0m"
    )

    await db.insert(dayTabel).values(dayTableData)
    const dayTableTime = new Date().getTime() - startTime - dishTableTime
    console.log(
      "\x1b[32mDay table seeded successfully. Time taken:",
      dayTableTime,
      "ms\x1b[0m"
    )
  } catch (e) {
    console.error("\x1b[31mError seeding database:\x1b[0m")
    console.error(e)
  }
}

seed()
