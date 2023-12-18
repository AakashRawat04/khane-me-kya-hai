import { NextResponse } from "next/server"
import { dayTable } from "@/schema/schema"
import { db } from "@/utils/db"

export async function GET() {
  const days = await db.select().from(dayTable)

  return NextResponse.json(days)
}
