import { NextRequest, NextResponse } from "next/server"
import { dishTable } from "@/schema/schema"
import { db } from "@/utils/db"
import { eq, sql } from "drizzle-orm"

export async function POST(request: NextRequest) {
  const { dishId } = await request.json()
  if (!dishId) {
    return NextResponse.json({ success: false, error: "Invalid data" })
  }
  try {
    console.log("dishId", dishId)
    console.log(
      await db.select().from(dishTable).where(eq(dishTable.id, dishId))
    )
    await db
      .update(dishTable)
      .set({ dislikes: sql`dislikes + 1` })
      .where(eq(dishTable.id, dishId))
      .execute()

    return NextResponse.json({ success: true, dishId: dishId })
  } catch (e) {
    return NextResponse.json({ success: false, error: e })
  }
}
