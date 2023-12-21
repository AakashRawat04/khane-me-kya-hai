import {
  dayTableData,
  dishTableData,
  mealTableData,
} from "@/drizzle/placeholder-data"
import {
  breakfastTable,
  dayTable,
  dinnerTable,
  dishTable,
  lunchTable,
  snackTable,
} from "@/schema/schema"
import { db } from "@/utils/db"
import { type PgTableWithColumns } from "drizzle-orm/pg-core"

type TableData = {
  [key: string]: string | number | string[]
}[]

async function seed(
  table: PgTableWithColumns<any>,
  data: TableData,
  tableName: string
) {
  const startTime = new Date().getTime()
  const rows = await db.select().from(table)
  if (!rows.length) {
    await db.insert(table).values(data)
    const timeTaken = new Date().getTime() - startTime
    console.log(
      `\x1b[32m${tableName} table seeded successfully. Time taken:`,
      timeTaken,
      "ms\x1b[0m"
    )
    return
  }

  const queryTime = new Date().getTime() - startTime
  console.log(
    `\x1b[32m${tableName} table already contains data. queryTime:`,
    queryTime,
    "ms\x1b[0m"
  )
}

async function main() {
  try {
    await seed(dayTable, dayTableData, "dayTable")
    await seed(dishTable, dishTableData, "dishTable")
    await seed(breakfastTable, mealTableData, "breakfastTable")
    await seed(lunchTable, mealTableData, "lunchTable")
    await seed(snackTable, mealTableData, "snackTable")
    await seed(dinnerTable, mealTableData, "dinnerTable")
  } catch (e) {
    console.error("\x1b[31mError seeding database:\x1b[0m")
    console.error(e)
  }
}

main()
