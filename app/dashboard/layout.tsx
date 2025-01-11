import React from 'react'
import { Header } from "@/components/ui/header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1 overflow-y-auto bg-white">
        {children}
      </main>
    </div>
  )
}


