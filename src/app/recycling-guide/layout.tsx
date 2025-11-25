import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function RecyclingGuideLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="min-h-screen bg-neutral-950 text-white p-6">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
