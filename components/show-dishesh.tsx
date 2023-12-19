import { dishTable } from "@/schema/schema"
import { db } from "@/utils/db"

import { Badge } from "./ui/badge"

export const ShowDishesh = async function ShowDishesh() {
  const dishesh = await db.select().from(dishTable)
  return (
    <div>
      <div className="text-xl font-bold">All Dishesh</div>
      <div className="grid grid-cols-5">
        {dishesh.map((dish) => (
          <div key={dish.id} className="flex flex-row gap-3">
            <div className="font-semibold ">{dish.name}</div>
            <Badge variant={"secondary"}>{dish.dislikes}</Badge>
          </div>
        ))}
      </div>
    </div>
  )
} as unknown as () => JSX.Element
