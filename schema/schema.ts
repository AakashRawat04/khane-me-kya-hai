import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core"
import { createInsertSchema } from "drizzle-zod"

export const dishTable = pgTable("dishes", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  name: text("name").notNull(),
  dislikes: integer("dislikes").default(0),
})

export const insertDishTableSchema = createInsertSchema(dishTable, {
  name: (schema) => schema.name.min(3),
})

export const dayTable = pgTable("days", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  dayNumber: integer("dayNumber").notNull(),
  dayName: text("dayName").notNull(),
})

export const breakfastTable = pgTable("breakfast", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  dayNumber: integer("dayno").notNull(),
  dishes: integer("dishes").array().notNull(),
})

export const lunchTable = pgTable("lunch", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  dayNumber: integer("dayno").notNull(),
  dishes: integer("dishes").array().notNull(),
})

export const snackTable = pgTable("snack", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  dayNumber: integer("dayno").notNull(),
  dishes: integer("dishes").array().notNull(),
})

export const dinnerTable = pgTable("dinner", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  dayNumber: integer("dayno").notNull(),
  dishes: integer("dishes").array().notNull(),
})
