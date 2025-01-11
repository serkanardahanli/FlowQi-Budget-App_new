import React from 'react'
import { Header } from "@/components/ui/header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen flex-col">
          <Header />
          <main className="flex-1 overflow-y-auto bg-white">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}


