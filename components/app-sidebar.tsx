'use client'

import * as React from "react"
import { LayoutDashboard, Inbox, CheckSquare, DollarSign, Users, Package, FileText, HandshakeIcon, Settings, User } from 'lucide-react'
import { useRouter } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter()

  const personalItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
    },
    {
      title: "Inbox",
      icon: Inbox,
      href: "/inbox",
    },
    {
      title: "My Tasks",
      icon: CheckSquare,
      href: "/tasks",
    },
  ]

  const moduleItems = [
    {
      title: "Budget",
      icon: DollarSign,
      href: "/budget",
    },
    {
      title: "Customers",
      icon: Users,
      href: "/customers",
    },
    {
      title: "Products",
      icon: Package,
      href: "/products",
    },
    {
      title: "Invoices",
      icon: FileText,
      href: "/invoices",
    },
    {
      title: "Deals",
      icon: HandshakeIcon,
      href: "/deals",
    },
  ]

  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b border-border p-4">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <span className="text-primary">Flow</span>
          <span>Qi</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Personal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {personalItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                  >
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => router.push(item.href)}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.title}
                    </Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Modules</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {moduleItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                  >
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => router.push(item.href)}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.title}
                    </Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}


