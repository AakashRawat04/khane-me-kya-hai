"use server"

import { dishTable } from "@/schema/schema"
import { db } from "@/utils/db"
import { inArray } from "drizzle-orm"

import { FormProps } from "@/app/dashboard/editDishesh/add-dishesh"

export async function add_dishes(data: FormProps) {
  await db.insert(dishTable).values(data.dishes)
}

export async function delete_dishes(id: string[]) {
  await db.delete(dishTable).where(inArray(dishTable.id, id))
}
