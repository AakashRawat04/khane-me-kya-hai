"use client"

import { useRouter } from "next/navigation"
import { add_dishes } from "@/action/edit-dishes-form"
import { insertDishTableSchema } from "@/schema/database-types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

const formProps = z.object({
  dishes: z.array(insertDishTableSchema),
})

export type FormProps = z.infer<typeof formProps>

const defaultValues: FormProps = {
  dishes: [
    {
      name: "",
    },
  ],
}

export function AddDishesh() {
  const form = useForm<FormProps>({
    defaultValues,
    resolver: zodResolver(formProps),
    mode: "onChange",
  })

  const router = useRouter()

  const { fields, append, remove } = useFieldArray({
    name: "dishes",
    control: form.control,
  })

  async function onSubmit(data: FormProps) {
    const toastHandler = toast({
      title: "Adding Dishes...",
    })
    try {
      await add_dishes(data)
      toastHandler.update({
        id: toastHandler.id,
        title: "Successfully added dishes.",
      })
    } catch (e) {
      console.log(e)
      toastHandler.update({
        id: toastHandler.id,
        title: "Failed to add dishes",
      })
    }
    router.refresh()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`dishes.${index}.name`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>
                    Dishesh
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && "sr-only")}>
                    Add Dishesh
                  </FormDescription>
                  <FormControl>
                    <div className="flex gap-2 ">
                      <Input
                        {...field}
                        placeholder={"Dahi balle"}
                        className="w-60 min-w-[240px] grow"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className=""
                        onClick={() => remove(index)}
                      >
                        Remove field
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => append({ name: "" })}
          >
            Add Dish
          </Button>
        </div>
        <Button type="submit">Update Dishes</Button>
      </form>
    </Form>
  )
}
