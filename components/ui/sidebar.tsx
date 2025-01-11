'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Activity, Users, Package, FileText, DollarSign, Settings, ChevronLeft, Inbox, CheckSquare, Star, User, Grid, Plus } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState } from 'react'

const navItems = [
  {
    title: 'PERSONAL',
    icon: User,
    items: [
      { title: 'Dashboard', href: '/dashboard', icon: Activity },
      { title: 'Inbox', href: '/inbox', icon: Inbox },
      { title: 'My Tasks', href: '/tasks', icon: CheckSquare },
    ],
  },
  {
    title: 'FAVORITES',
    icon: Star,
    items: [],
  },
  {
    title: 'MODULES',
    icon: Grid,
    items: [
      { title: 'Customers', href: '/customers', icon: Users },
      { title: 'Products', href: '/products', icon: Package },
      { title: 'Invoices', href: '/invoices', icon: FileText },
      { title: 'Budget', href: '/budget', icon: DollarSign },
    ],
  },
  {
    title: 'SETTINGS',
    icon: Settings,
    items: [
      { title: 'Settings', href: '/settings', icon: Settings },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={cn(
      "flex h-full flex-col border-r bg-white transition-all duration-300",
      isCollapsed ? "w-16" : "w-56"
    )}>
      <div className="flex h-14 items-center justify-between border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Activity className="h-6 w-6 text-blue-600" />
          {!isCollapsed && <span>FlowQi</span>}
        </Link>
        <Button
          variant="ghost"
          size="sm"
          className="h-6 w-6 p-0"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <ChevronLeft className={cn(
            "h-4 w-4 transition-transform",
            isCollapsed && "rotate-180"
          )} />
        </Button>
      </div>
      <nav className="flex-1 space-y-6 p-4">
        {navItems.map((section) => (
          <div key={section.title}>
            {!isCollapsed && (
              <div className="flex items-center gap-2 mb-2">
                <section.icon className="h-4 w-4 text-gray-500" />
                <h3 className="text-xs font-medium text-gray-500">
                  {section.title}
                </h3>
              </div>
            )}
            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-2 py-1.5 text-sm font-medium",
                      isActive ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {!isCollapsed && <span>{item.title}</span>}
                  </Link>
                )
              })}
              {section.title === 'FAVORITES' && !isCollapsed && (
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-md px-2 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add to favorites</span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </nav>
    </div>
  )
}


