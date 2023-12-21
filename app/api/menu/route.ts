import { NextResponse, type NextRequest } from "next/server"
import { Menu } from "@/schema/database-types"
import {
  breakfastTable,
  dinnerTable,
  dishTable,
  lunchTable,
  snackTable,
} from "@/schema/schema"
import { db } from "@/utils/db"
import { eq, inArray } from "drizzle-orm"

const getMenu = async (dayno: number, meal: string) => {
  switch (meal) {
    case "breakfast":
      const breakfast = await db
        .select()
        .from(breakfastTable)
        .where(eq(breakfastTable.dayNumber, dayno))
      return breakfast
    case "lunch":
      const lunch = await db
        .select()
        .from(lunchTable)
        .where(eq(lunchTable.dayNumber, dayno))
      return lunch
    case "snack":
      const snack = await db
        .select()
        .from(snackTable)
        .where(eq(snackTable.dayNumber, dayno))
      return snack
    case "dinner":
      const dinner = await db
        .select()
        .from(dinnerTable)
        .where(eq(dinnerTable.dayNumber, dayno))
      return dinner
    default:
      throw new Error("Invalid meal")
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const dayno = searchParams.get("dayno")
    const meal = searchParams.get("meal")

    if (!dayno || !meal) {
      return NextResponse.json({
        error: "Missing day or meal",
      })
    }

    const menu: Menu[] = await getMenu(parseInt(dayno), meal)

    // get the dishes from dishtable
    const dishIds: string[] = menu[0].dishes

    const dishes = await db
      .select()
      .from(dishTable)
      .where(inArray(dishTable.id, dishIds))

    return NextResponse.json({ dishes: dishes })
  } catch (e) {
    return NextResponse.json({ success: false })
  }
}
