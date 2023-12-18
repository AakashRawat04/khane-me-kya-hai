import { Days } from "@/types/days"
import { environment } from "@/config/environment"
import { Separator } from "@/components/ui/separator"

import Menu from "./menu-form"

interface MenuPerDayAndHourProps {
  params: { day: string; hour: string }
}

export async function generateStaticParams() {
  const res = await fetch(`${environment.BASE_URL}/api/menu/days`)
  const days: Days = await res.json()
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
        <Separator className="mt-3" />
      </div>
      <Menu day={day} hour={hour} />
    </div>
  )
}
