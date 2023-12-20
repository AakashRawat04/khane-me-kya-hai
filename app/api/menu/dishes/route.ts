import { dishTable } from "@/schema/schema"
import { db } from "@/utils/db"
import { NextResponse } from "next/server"

export async function GET() {
  const days = await db.select().from(dishTable)

  return NextResponse.json(days)
}
