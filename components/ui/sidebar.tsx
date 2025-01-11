k'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Activity, Users, Package, FileText, DollarSign, Settings, ChevronLeft, Inbox, CheckSquare, Star } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState } from 'react'

const navItems = [
  {
    title: 'Personal',
    items: [
      { title: 'Dashboard', href: '/dashboard', icon: Activity },
      { title: 'Inbox', href: '/inbox', icon: Inbox },
      { title: 'My Tasks', href: '/tasks', icon: CheckSquare },
    ],
  },
  {
    title: 'Favorites',
    items: [],
  },
  {
    title: 'Modules',
    items: [
      { title: 'Customers', href: '/customers', icon: Users },
      { title: 'Products', href: '/products', icon: Package },
      { title: 'Invoices', href: '/invoices', icon: FileText },
      { title: 'Budget', href: '/budget', icon: DollarSign },
    ],
  },
  {
    title: 'Settings',
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
      <nav className="flex-1 space-y-4 p-2">
        {navItems.map((section) => (
          <div key={section.title}>
            {!isCollapsed && (
              <h3 className="mb-2 px-2 text-xs font-semibold text-gray-500 uppercase">
                {section.title}
              </h3>
            )}
            {section.items.map((item) => {
              const isActive = pathname === item.href
              return (
                <Button
                  key={item.href}
                  asChild
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    isCollapsed ? "px-2" : "px-4"
                  )}
                  title={isCollapsed ? item.title : undefined}
                >
                  <Link href={item.href}>
                    <item.icon className="h-4 w-4" />
                    {!isCollapsed && <span className="ml-2">{item.title}</span>}
                  </Link>
                </Button>
              )
            })}
            {section.title === 'Favorites' && !isCollapsed && (
              <Button
                variant="ghost"
                className="w-full justify-start px-4"
                onClick={() => {/* Add to favorites logic */}}
              >
                <Star className="h-4 w-4" />
                <span className="ml-2">Add to favorites</span>
              </Button>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}


