import { defineConfig } from "drizzle-kit"

import { environment } from "@/config/environment"

export default defineConfig({
  schema: "./schema/schema.ts",
  out: "./drizzle/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: environment.POSTGRES.URL,
  },
  verbose: true,
  strict: true,
})
