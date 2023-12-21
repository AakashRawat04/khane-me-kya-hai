import { NextRequest, NextResponse } from "next/server"
import { update_dishes } from "@/action/edit-dishes-form"
import { dishTable } from "@/schema/schema"
import { db } from "@/utils/db"

export async function GET() {
  const days = await db.select().from(dishTable)

  return NextResponse.json(days)
}

export async function PATCH(request: NextRequest) {
  const { dayNo, meal, dishes } = await request.json()
  if (!dayNo || !meal || !dishes) {
    return NextResponse.json({ success: false, error: "Invalid data" })
  }
  try {
    await update_dishes(dayNo, meal, dishes)

    return NextResponse.json({ success: true, dayno: dayNo })
  } catch (e) {
    return NextResponse.json({ success: false, error: e })
  }
}
