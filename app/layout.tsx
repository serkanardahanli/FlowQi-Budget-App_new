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
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}


