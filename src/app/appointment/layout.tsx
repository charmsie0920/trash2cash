import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import FloatingNav from "@/components/floating-nav"

export default function appointmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen w-full bg-no-repeat bg-cover bg-center">
      <FloatingNav />
      <main className="flex-1 min-h-screen">
        {children}
      </main>
    </div>
  )
}
