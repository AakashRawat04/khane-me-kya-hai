import * as schema from "@/schema/schema"
import { sql } from "@vercel/postgres"
import { config } from "dotenv"
import { drizzle } from "drizzle-orm/vercel-postgres"

config()

export const db = drizzle(sql, { schema })
