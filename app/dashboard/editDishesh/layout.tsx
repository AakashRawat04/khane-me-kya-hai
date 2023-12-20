"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface EditDishLayoutProps {
  children: React.ReactNode
}

export default function EditDishLayout({ children }: EditDishLayoutProps) {
  const path = usePathname()
  const isDeleteDisheshPage = path.includes("deleteDishesh")
  return (
    <>
      <section className="container mt-12 gap-40 bg-background pb-8 pt-6 md:py-10">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Edit Dishes
        </h1>
        <Separator className="mt-4" />
        <div className="flex flex-row  pb-8 pt-6 md:py-10">
          <aside className="flex flex-col gap-4" style={{ minWidth: 0 }}>
            <Link
              href={`/dashboard/monday/breakfast`}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "hover:bg-green-500 hover:text-black",
                " justify-start",
                "bg-green-400 text-black"
              )}
            >
              Go to Edit Menu
            </Link>
          </aside>
          <div className="flex-1 px-10 lg:w-full" style={{ flex: 1 }}>
            {children}
          </div>
        </div>
      </section>
    </>
  )
}
