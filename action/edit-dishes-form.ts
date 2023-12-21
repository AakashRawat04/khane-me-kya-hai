"use server"

import {
  breakfastTable,
  dinnerTable,
  dishTable,
  lunchTable,
  snackTable,
} from "@/schema/schema"
import { db } from "@/utils/db"
import { eq, inArray } from "drizzle-orm"

import { FormProps } from "@/app/dashboard/editDishesh/add-dishesh"

export async function add_dishes(data: FormProps) {
  await db.insert(dishTable).values(data.dishes)
}

export async function delete_dishes(id: string[]) {
  await db.delete(dishTable).where(inArray(dishTable.id, id))
}

export async function update_dishes(
  dayno: number,
  hour: "breakfast" | "lunch" | "snack" | "dinner",
  ids: string[]
) {
  let tableToUpdate

  switch (hour) {
    case "breakfast":
      console.log("breakfast")
      tableToUpdate = breakfastTable
      break
    case "lunch":
      console.log("lunch")
      tableToUpdate = lunchTable
      break
    case "snack":
      console.log("snack")
      tableToUpdate = snackTable
      break
    case "dinner":
      console.log("dinner")
      tableToUpdate = dinnerTable
      break
    default:
      throw new Error("Invalid hour")
  }

  await db
    .update(tableToUpdate)
    .set({ dishes: ids })
    .where(eq(tableToUpdate.dayNumber, dayno))
}
