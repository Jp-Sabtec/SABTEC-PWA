"use client";

import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
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

const navItems = [
  { href: "/dashboard", label: "Calendar", icon: CalendarDays },
  { href: "/timesheet", label: "Timesheet", icon: Clock3 },
  { href: "/leave", label: "Leave", icon: Plane },
];

const userAvatar = PlaceHolderImages.find((img) => img.id === "user-avatar");

export function SidebarNav() {
  const pathname = usePathname();
  const { isMobile, state } = useSidebar();
  
  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-primary">
            <Workflow className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold">SabtecPWA</span>
          <SidebarTrigger className="ml-auto" />
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
        <div className="flex items-center gap-3 p-2 rounded-lg bg-sidebar-accent">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={userAvatar?.imageUrl}
              alt="John Doe"
              data-ai-hint={userAvatar?.imageHint}
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
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
