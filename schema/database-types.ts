import { InferSelectModel } from "drizzle-orm"
import { createInsertSchema, createSelectSchema } from "drizzle-zod"

import { breakfastTable, dishTable } from "./schema"

export const insertDishTableSchema = createInsertSchema(dishTable, {
  name: (schema) => schema.name.min(3),
})

export type DishTable = InferSelectModel<typeof dishTable>

export const selectMenuSchema = createSelectSchema(breakfastTable)

export type Menu = InferSelectModel<typeof breakfastTable>
