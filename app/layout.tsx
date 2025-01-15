import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppSidebar } from '@/components/app-sidebar'
import { UserProfile } from '@/components/user-profile'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FlowQi',
  description: 'Budget Software',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          <AppSidebar />
          <div className="flex flex-1 flex-col">
            <header className="flex h-14 items-center justify-end border-b bg-background px-4">
              <UserProfile />
            </header>
            <main className="flex-1 overflow-y-auto p-4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}


