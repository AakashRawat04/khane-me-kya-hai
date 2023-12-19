"use server"

import { dishTable } from "@/schema/schema"
import { db } from "@/utils/db"

import { FormProps } from "@/app/dashboard/editDishesh/add-dishesh"

export async function add_dishes(data: FormProps) {
  await db.insert(dishTable).values(data.dishes)
}
