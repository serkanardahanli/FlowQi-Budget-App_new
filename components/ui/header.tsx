'use client'

import React from 'react'
import Link from 'next/link'
import { Menu, Bell } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn("flex h-14 items-center border-b bg-white px-4", className)}>
      <Button variant="ghost" size="icon" className="mr-4">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle sidebar</span>
      </Button>
      <nav className="flex items-center space-x-4">
        <Link href="/dashboard" className="text-sm font-medium">Dashboard</Link>
        <Link href="/transactions" className="text-sm font-medium">Transactions</Link>
        <Link href="/budget" className="text-sm font-medium">Budget</Link>
        <Link href="/reports" className="text-sm font-medium">Reports</Link>
      </nav>
      <div className="ml-auto flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-sm font-medium">SC</span>
        </div>
      </div>
    </header>
  )
}


