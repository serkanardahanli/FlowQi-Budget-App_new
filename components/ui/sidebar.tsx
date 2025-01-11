import React from 'react'
import Link from 'next/link'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("w-64 bg-gray-100 p-4", className)}>
      <nav className="space-y-2">
        <Button asChild variant="ghost" className="w-full justify-start">
          <Link href="/dashboard">Dashboard</Link>
        </Button>
        <Button asChild variant="ghost" className="w-full justify-start">
          <Link href="/transactions">Transactions</Link>
        </Button>
        <Button asChild variant="ghost" className="w-full justify-start">
          <Link href="/budget">Budget</Link>
        </Button>
        <Button asChild variant="ghost" className="w-full justify-start">
          <Link href="/reports">Reports</Link>
        </Button>
      </nav>
    </div>
  )
}


