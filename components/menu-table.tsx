"use client"

import React, { useEffect } from "react"
import { DishTable } from "@/schema/database-types"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Icons } from "./icons"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

export default function MenuTable() {
  const date = new Date()
  const day = date.getDay() === 0 ? 7 : date.getDay()
  const weekdayNames = [
    "",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]
  const mealHours = ["Breakfast", "Lunch", "Snack", "Dinner"]
  const currentHour = date.getHours()
  let mealHour = ""

  if (currentHour >= 6 && currentHour < 10) {
    mealHour = mealHours[0] // Breakfast
  } else if (currentHour >= 10 && currentHour < 14) {
    mealHour = mealHours[1] // Lunch
  } else if (currentHour >= 14 && currentHour < 18) {
    mealHour = mealHours[2] // Snack
  } else {
    mealHour = mealHours[3] // Dinner
  }

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  const [dishes, setDishes] = React.useState<DishTable[]>([])

  useEffect(() => {
    const fetchMenu = async () => {
      const { dishes } = await fetch(
        `/api/menu?dayno=${day}&meal=${mealHour.toLowerCase()}`
      ).then((res) => res.json())
      console.log("dishes from fetch menu", dishes)
      setDishes(dishes)
    }
    fetchMenu()
  }, [day, mealHour])

  async function onDislike(dishid: string) {
    await fetch(`/api/menu/dishes/dislike`, {
      method: "POST",
      body: JSON.stringify({
        dishId: dishid,
      }),
    })
    return window.location.reload()
  }

  return (
    <>
      <div className="flex w-full flex-row justify-between px-2">
        <div className="justify-start">
          {weekdayNames[day]} - {mealHour}
        </div>

        <div className="justify-end">
          <Badge variant="outline">{formattedDate}</Badge>
        </div>
      </div>

      <Table>
        <TableCaption>Best of Luch surviving todays Food.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">Index</TableHead>
            <TableHead className="w-[200px]">Dishes</TableHead>
            <TableHead className="text-right">Dislikes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dishes.map((dish, index) => (
            <TableRow key={dish.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{dish.name}</TableCell>
              <TableCell className="flex items-center justify-end text-right">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    onDislike(dish.id)
                  }}
                >
                  <Icons.dislike className="h-4 w-4" />
                </Button>
                <span className="ml-4">{dish.dislikes}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
