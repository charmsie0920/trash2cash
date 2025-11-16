import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import FloatingNav from "@/components/floating-nav"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex bg-black/10 backdrop-blur-sm">
      <FloatingNav />
      <main className="flex-1 min-h-screen">
        {children}
      </main>
    </div>
  )
}
