import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        {/* Header row containing the toggle button */}
        <header className="flex h-12 items-center gap-2 border-b px-4">
          <SidebarTrigger />
        </header>
        {/* Page content */}
        <main className="flex-1 p-6 min-w-0">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
