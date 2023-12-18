import { config } from "dotenv"
import { z } from "zod"

config()

const envSchema = z.object({
  NODE_ENV: z.string().default("development"),
  POSTGRES_URL: z.string(),
  POSTGRES_PRISMA_URL: z.string(),
  POSTGRES_URL_NON_POOLING: z.string(),
  POSTGRES_USER: z.string(),
  POSTGRES_HOST: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_DATABASE: z.string(),
  BASE_URL: z.string(),
})

const parsedEnvSchema = envSchema.parse(process.env)

export const environment = {
  BASE_URL: parsedEnvSchema.BASE_URL,
  NODE_ENV: parsedEnvSchema.NODE_ENV,
  POSTGRES: {
    URL: parsedEnvSchema.POSTGRES_URL,
    PRISMA_URL: parsedEnvSchema.POSTGRES_PRISMA_URL,
    URL_NON_POOLING: parsedEnvSchema.POSTGRES_URL_NON_POOLING,
    USER: parsedEnvSchema.POSTGRES_USER,
    HOST: parsedEnvSchema.POSTGRES_HOST,
    PASSWORD: parsedEnvSchema.POSTGRES_PASSWORD,
    DATABASE: parsedEnvSchema.POSTGRES_DATABASE,
  },
}
