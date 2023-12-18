import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "@/components/sidebar-nav"

interface WeekLayoutProps {
  children: React.ReactNode
  params: { day: string; hour: string }
}

export default function WeekLayout({ children, params }: WeekLayoutProps) {
  return (
    <>
      <section className="container mt-12 gap-40 bg-background pb-8 pt-6 md:py-10">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          <span className="pr-3 text-green-400">
            {params.day.toUpperCase()}
          </span>
          -
          <span className="pl-3">
            {params.hour.charAt(0).toUpperCase() + params.hour.slice(1)}
          </span>
        </h1>
        <Separator className="mt-4" />
        <div className="flex flex-row gap-x-24 pb-8 pt-6 md:py-10">
          <aside className="-mx-4" style={{ minWidth: 0 }}>
            <SidebarNav day={params.day} hour={params.hour} />
          </aside>
          <div className="flex-1 px-10 lg:w-full" style={{ flex: 1 }}>
            {children}
          </div>
        </div>
      </section>
    </>
  )
}
