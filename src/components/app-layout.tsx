"use client";

import { Sidebar, SidebarProvider, SidebarInset, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { SidebarNav } from "./sidebar-nav";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function AppLayoutContent({ children }: { children: React.ReactNode }) {
  const { isMobile } = useSidebar();
  
  return (
    <SidebarInset>
      <header className="flex items-center p-4 border-b md:hidden">
        <SidebarTrigger />
      </header>
      {children}
    </SidebarInset>
  )
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/") {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarNav />
      </Sidebar>
      <AppLayoutContent>{children}</AppLayoutContent>
    </SidebarProvider>
  );
}
