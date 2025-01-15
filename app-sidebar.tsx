import * as React from "react"
import Link from "next/link"
import { LayoutDashboard, DollarSign, Users, Package, FileText, Settings, User } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AppSidebar() {
  return (
    <div className="flex flex-col h-full w-64 bg-background border-r">
      <div className="flex items-center gap-2 px-4 py-4">
        <Avatar>
          <AvatarImage src="/logo.png" alt="FlowQi Logo" />
          <AvatarFallback>FQ</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-semibold">FlowQi</span>
          <span className="text-xs text-muted-foreground">Budget Software</span>
        </div>
      </div>
      <nav className="flex-1 overflow-auto space-y-1 p-2">
        <Button asChild variant="ghost" className="w-full justify-start">
          <Link href="/">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Dashboard
          </Link>
        </Button>
        <Button asChild variant="ghost" className="w-full justify-start">
          <Link href="/transactions">
            <DollarSign className="mr-2 h-4 w-4" />
            Transactions
          </Link>
        </Button>
        <Button asChild variant="ghost" className="w-full justify-start">
          <Link href="/budgets">
            <Package className="mr-2 h-4 w-4" />
            Budgets
          </Link>
        </Button>
        <Button asChild variant="ghost" className="w-full justify-start">
          <Link href="/reports">
            <FileText className="mr-2 h-4 w-4" />
            Reports
          </Link>
        </Button>
        <Button asChild variant="ghost" className="w-full justify-start">
          <Link href="/customers">
            <Users className="mr-2 h-4 w-4" />
            Customers
          </Link>
        </Button>
        <Button asChild variant="ghost" className="w-full justify-start">
          <Link href="/projects">
            <Package className="mr-2 h-4 w-4" />
            Projects
          </Link>
        </Button>
      </nav>
      <div className="p-2">
        <Button asChild variant="ghost" className="w-full justify-start">
          <Link href="/settings">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Link>
        </Button>
      </div>
      <div className="p-2 border-t">
        <Button asChild variant="ghost" className="w-full justify-start">
          <Link href="/profile">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Link>
        </Button>
      </div>
    </div>
  )
}


