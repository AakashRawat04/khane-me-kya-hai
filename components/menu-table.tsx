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
import { Button } from "./ui/button"

export default function MenuTable() {
  return (
    <Table>
      <TableCaption>
        Best of Luch surviving todays Food.
        <Icons.heart />
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">Index</TableHead>
          <TableHead className="w-[200px]">Item</TableHead>
          <TableHead className="text-right">Dislikes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">1</TableCell>
          <TableCell>chappati</TableCell>
          <TableCell className="flex items-center justify-end text-right">
            <Button variant="outline" size="icon">
              <Icons.dislike className="h-4 w-4" />
            </Button>

            <span className="ml-4">69</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">2</TableCell>
          <TableCell>chappati</TableCell>
          <TableCell className="text-right">69</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">3</TableCell>
          <TableCell>chappati</TableCell>
          <TableCell className="text-right">69</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
