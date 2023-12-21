"use client"

import React from "react"
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

const getDayNo = (day: string) => {
  switch (day) {
    case "monday":
      return 1
    case "tuesday":
      return 2
    case "wednesday":
      return 3
    case "thursday":
      return 4
    case "friday":
      return 5
    case "saturday":
      return 6
    case "sunday":
      return 7
    default:
      return 0
  }
}

export function DisplayMenu({
  day,
  hour,
}: {
  day: string
  hour: "breakfast" | "lunch" | "snack" | "dinner"
}) {
  const dayNo = getDayNo(day)
  const [menu, setMenu] = React.useState<DishTable[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)

  const fetchMenuUrl = `/api/menu/?dayno=${dayNo}&meal=${hour}`

  React.useEffect(() => {
    const fetchMenu = async () => {
      const { dishes } = await fetch(fetchMenuUrl).then((res) => res.json())
      setMenu(dishes)
      setLoading(false)
    }

    fetchMenu()
  })
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Dishes</TableHead>
          <TableHead className="text-right">Dislikes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loading ? (
          <TableRow>
            <TableCell colSpan={2}> Loading</TableCell>
          </TableRow>
        ) : (
          menu?.map((dish) => (
            <TableRow key={dish.id}>
              <TableCell>{dish.name}</TableCell>
              <TableCell className="text-right">{dish.dislikes}</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}
