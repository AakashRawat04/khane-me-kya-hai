import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import MenuTable from "@/components/menu-table"
import { SiteHeader } from "@/components/site-header"

export default function IndexPage() {
  return (
    <>
      <SiteHeader />
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Beautifully designed Menu Website{" "}
            <br className="hidden sm:inline" />
            For Funni quality mess food.
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            show some love to your favourite mess food by giving it a dislike.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline" })}
          >
            GitHub
          </Link>
        </div>

        <MenuTable />
        <footer className="flex w-full items-center justify-center gap-2">
          <a
            href="https://github.com/aakashrawat04"
            target={"_blank"}
            rel="noreferrer"
          >
            <Badge>aakashrawat04</Badge>
          </a>
          <a
            href="https://github.com/jatindotdev"
            target={"_blank"}
            rel="noreferrer"
          >
            <Badge>jatindotdev</Badge>
          </a>
        </footer>
      </section>
    </>
  )
}
