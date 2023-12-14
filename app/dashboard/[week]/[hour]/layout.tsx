import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "@/components/sidebar-nav"

interface WeekLayoutProps {
  children: React.ReactNode
  params: { week: string; hour: string }
}

export default function WeekLayout({ children, params }: WeekLayoutProps) {
  return (
    <>
      <section className="container mt-12 gap-40 bg-background pb-8 pt-6 md:py-10">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          {params.week.toUpperCase()}-
          {params.hour.charAt(0).toUpperCase() + params.hour.slice(1)}
        </h1>
        <Separator className="mt-4" />
        <div className="flex flex-row gap-40 pb-8 pt-6 md:py-10">
          <aside className="-mx-4" style={{ minWidth: 0 }}>
            <SidebarNav week={params.week} hour={params.hour} />
          </aside>
          <div className="flex-1 lg:max-w-2xl" style={{ flex: 1 }}>
            {children}
          </div>
        </div>
      </section>
    </>
  )
}
