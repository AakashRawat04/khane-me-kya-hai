import { Separator } from "@/components/ui/separator"
import { ShowDishesh } from "@/components/show-dishesh"

import { AddDishesh } from "./add-dishesh"

export default function EditDishesh() {
  return (
    <div className="space-y-6">
      <AddDishesh />
      <Separator />
      <ShowDishesh />
    </div>
  )
}
