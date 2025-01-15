import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function Sidebar({ className, children, ...props }: SidebarProps) {
  return (
    <div className={cn("flex h-screen w-64 flex-col border-r bg-background", className)} {...props}>
      {children}
    </div>
  )
}

interface SidebarTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  return (
    <Button variant="ghost" size="icon" className={cn("", className)} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

interface SidebarItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: React.ReactNode
}

export function SidebarItem({ className, icon, children, ...props }: SidebarItemProps) {
  return (
    <Link
      className={cn(
        "flex items-center rounded-lg px-3 py-2 text-gray-900 hover:bg-gray-100",
        className
      )}
      {...props}
    >
      {icon && <span className="mr-3">{icon}</span>}
      <span>{children}</span>
    </Link>
  )
}
