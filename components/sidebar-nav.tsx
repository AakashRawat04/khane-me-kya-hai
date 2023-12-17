import Link from "next/link"

import { cn } from "@/lib/utils"

import { buttonVariants } from "./ui/button"

const sidebarDayItems = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]

const sidebarHourItems = ["Breakfast", "Lunch", "Snack", "Dinner"]

interface SidebarNavProps extends React.ComponentProps<"div"> {
  week: string
  hour: string
}

export function SidebarNav({
  className,
  week,
  hour,
  ...props
}: SidebarNavProps) {
  return (
    <div className="flex flex-row gap-5">
      <nav
        className={cn(
          "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
          className
        )}
        {...props}
      >
        {sidebarDayItems.map((item) => (
          <Link
            key={item}
            href={`/dashboard/${item.toLowerCase()}/${hour.toLowerCase()}`}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              item.toLowerCase() === week
                ? "bg-muted hover:bg-muted"
                : "hover:bg-transparent hover:underline",
              "justify-start"
            )}
          >
            {item}
          </Link>
        ))}
      </nav>
      <nav
        className={cn(
          "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
          className
        )}
        {...props}
      >
        {sidebarHourItems.map((item) => (
          <Link
            key={item}
            href={`/dashboard/${week.toLowerCase()}/${item.toLowerCase()}`}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              item.toLowerCase() === hour
                ? "bg-muted hover:bg-muted"
                : "hover:bg-transparent hover:underline",
              "justify-start"
            )}
          >
            {item}
          </Link>
        ))}
      </nav>
    </div>
  )
}