"use client";

import { Sidebar, SidebarProvider, SidebarInset, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { SidebarNav } from "./sidebar-nav";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function AppLayoutContent({ children }: { children: React.ReactNode }) {
  const { state, isMobile } = useSidebar();
  
  const showDesktopTrigger = !isMobile && state === "collapsed";

  return (
    <SidebarInset>
      <header className="flex items-center p-4 border-b">
        <SidebarTrigger variant="ghost" size="icon" className={cn({
          "hidden md:flex": !showDesktopTrigger,
        })} />
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
