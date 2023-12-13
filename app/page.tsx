import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import MenuTable from "@/components/menu-table"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed Menu Website <br className="hidden sm:inline" />
          For Funni quality mess food.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          show some love to your favourite mess food by giving it a dislike.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Login
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
      <div className="flex w-full flex-row justify-between px-2">
        <div className="justify-start">Monday - Breakfast</div>

        <div className="justify-end">
          <Badge variant="outline">12.12.23</Badge>
        </div>
      </div>
      <MenuTable />
    </section>
  )
}
