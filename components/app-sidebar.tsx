import * as React from "react"
import Link from "next/link"
import { LayoutDashboard, DollarSign, PieChart, FileText, Users, Settings } from 'lucide-react'
import { Button } from "@/components/ui/button"

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: DollarSign, label: "Transactions", href: "/transactions" },
  { icon: PieChart, label: "Budgets", href: "/budgets" },
  { icon: FileText, label: "Reports", href: "/reports" },
  { icon: Users, label: "Customers", href: "/customers" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export function AppSidebar() {
  return (
    <div className="flex h-full w-64 flex-col bg-background border-r">
      <div className="flex h-14 items-center border-b px-4">
        <h1 className="text-xl font-bold">FlowQi</h1>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {sidebarItems.map((item) => (
          <Link key={item.href} href={item.href} passHref>
            <Button
              variant="ghost"
              className="w-full justify-start"
            >
              <item.icon className="mr-2 h-4 w-4" />
              <span>{item.label}</span>
            </Button>
          </Link>
        ))}
      </nav>
    </div>
  )
}


