"use client";

import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  CalendarDays,
  Clock3,
  Plane,
  Workflow,
  Settings,
  LogOut,
} from "lucide-react";
import { useSidebar } from "./ui/sidebar";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Calendar", icon: CalendarDays },
  { href: "/timesheet", label: "Timesheet", icon: Clock3 },
  { href: "/leave", label: "Leave", icon: Plane },
];

const userAvatar = PlaceHolderImages.find((img) => img.id === "user-avatar");

export function SidebarNav() {
  const pathname = usePathname();
  const { state } = useSidebar();
  
  const isCollapsed = state === "collapsed";

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <div className={cn("p-1.5 rounded-lg bg-primary", isCollapsed && "p-2")}>
            <Workflow className={cn("w-6 h-6 text-primary-foreground", isCollapsed && "w-4 h-4")} />
          </div>
          <span className={cn("text-lg font-semibold", isCollapsed && "hidden")}>SabtecPWA</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={item.label}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className={cn("flex items-center gap-3 p-2 rounded-lg", isCollapsed ? "justify-center" : "bg-sidebar-accent")}>
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={userAvatar?.imageUrl}
              alt="John Doe"
              data-ai-hint={userAvatar?.imageHint}
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className={cn("flex flex-col", isCollapsed && "hidden")}>
            <span className="font-semibold">John Doe</span>
            <span className="text-xs text-muted-foreground">john.doe@sabtec.com</span>
          </div>
        </div>
        <SidebarMenu>
            <SidebarMenuItem>
                 <SidebarMenuButton tooltip="Settings">
                    <Settings />
                    <span>Settings</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                 <SidebarMenuButton tooltip="Log out">
                    <LogOut />
                    <span>Log out</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}
