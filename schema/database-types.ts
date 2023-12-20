import { InferSelectModel } from "drizzle-orm"
import { createInsertSchema } from "drizzle-zod"

import { dishTable } from "./schema"

export const insertDishTableSchema = createInsertSchema(dishTable, {
  name: (schema) => schema.name.min(3),
})

export type DishTable = InferSelectModel<typeof dishTable>
