import { dayTable } from "@/schema/schema"
import { db } from "@/utils/db"

import { Separator } from "@/components/ui/separator"

import { MenuForm } from "./menu-form"
import { DisplayMenu } from "./menu-table"

interface MenuPerDayAndHourProps {
  params: { day: string; hour: "breakfast" | "lunch" | "snack" | "dinner" }
}

export async function generateStaticParams() {
  const days = await db.select().from(dayTable)
  const hours = ["breakfast", "lunch", "snack", "dinner"]

  return days
    .map((day) => {
      return hours.map((hour) => {
        return {
          params: {
            day: day.dayName,
            hour: hour,
          },
        }
      })
    })
    .flat()
}

export default function MenuPerDayAndHour({ params }: MenuPerDayAndHourProps) {
  const { day, hour } = params
  return (
    <div className="">
      <div>
        <h3 className="text-lg font-medium">Menu</h3>
        <p className="text-sm text-muted-foreground">
          Displaying <span className="text-yellow-300"> {hour} </span> menu for{" "}
          <span className="text-lime-300">{day}</span>.
        </p>
        <div className="w-2/5">
          <DisplayMenu day={day} hour={hour} />
        </div>
        <Separator className="mt-3" />
      </div>
      <MenuForm day={day} hour={hour} />
    </div>
  )
}
