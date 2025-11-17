import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import FloatingNav from "@/components/floating-nav"

export default function RecyclingGuideLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full">
      <FloatingNav />
      <main className="min-h-screen p-6">
        {children}
      </main>

    </div>
  );
}
