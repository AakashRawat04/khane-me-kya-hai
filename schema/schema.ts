import { integer, pgTable, text, uuid, varchar } from "drizzle-orm/pg-core"

export const dishTable = pgTable("dishes", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  name: text("name").notNull(),
  dislikes: integer("dislikes").default(0),
})

export const dayTable = pgTable("days", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  dayNumber: integer("dayNumber").notNull(),
  dayName: text("dayName").notNull(),
})

export const breakfastTable = pgTable("breakfast", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  dayNumber: integer("dayno").notNull(),
  dishes: varchar("dishes").array().notNull(),
})

export const lunchTable = pgTable("lunch", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  dayNumber: integer("dayno").notNull(),
  dishes: varchar("dishes").array().notNull(),
})

export const snackTable = pgTable("snack", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  dayNumber: integer("dayno").notNull(),
  dishes: varchar("dishes").array().notNull(),
})

export const dinnerTable = pgTable("dinner", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  dayNumber: integer("dayno").notNull(),
  dishes: varchar("dishes").array().notNull(),
})
