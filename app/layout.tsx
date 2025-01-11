import { Inter } from 'next/font/google'
import { Sidebar } from "@/components/ui/sidebar"
import { UserProfile } from "@/components/ui/user-profile"
import "./globals.css"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex flex-1 flex-col">
            <header className="flex h-14 items-center justify-end border-b bg-white px-4">
              <UserProfile />
            </header>
            <main className="flex-1 overflow-y-auto bg-gray-50">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}


