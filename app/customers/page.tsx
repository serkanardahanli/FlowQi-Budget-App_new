'use client'

import { Plus, Activity, Users, Package, FileText, Calendar, MessageSquare, FileIcon, Building2, Mail, Star, CalendarDays } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreateCustomerForm } from "@/components/create-customer-form"

export default function CustomersPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Customers</h1>
        <CreateCustomerForm onSave={(newCustomer) => {
          // Hier zou je normaal gesproken de nieuwe klant naar de backend sturen
          console.log('New customer created:', newCustomer)
          // En dan de lijst van klanten bijwerken
        }} />
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full justify-start border-b bg-transparent p-0 h-auto">
          <TabsTrigger 
            value="overview"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-primary data-[state=active]:border-b-2 rounded-none px-4 pb-3"
          >
            <Activity className="mr-2 h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger 
            value="users"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-primary data-[state=active]:border-b-2 rounded-none px-4 pb-3"
          >
            <Users className="mr-2 h-4 w-4" />
            Users
          </TabsTrigger>
          <TabsTrigger 
            value="products"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-primary data-[state=active]:border-b-2 rounded-none px-4 pb-3"
          >
            <Package className="mr-2 h-4 w-4" />
            Products
          </TabsTrigger>
          <TabsTrigger 
            value="subscriptions"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-primary data-[state=active]:border-b-2 rounded-none px-4 pb-3"
          >
            <FileText className="mr-2 h-4 w-4" />
            Subscriptions
          </TabsTrigger>
          <TabsTrigger 
            value="invoices"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-primary data-[state=active]:border-b-2 rounded-none px-4 pb-3"
          >
            <FileText className="mr-2 h-4 w-4" />
            Invoices
          </TabsTrigger>
          <TabsTrigger 
            value="tasks"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-primary data-[state=active]:border-b-2 rounded-none px-4 pb-3"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Tasks
          </TabsTrigger>
          <TabsTrigger 
            value="notes"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-primary data-[state=active]:border-b-2 rounded-none px-4 pb-3"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Notes
          </TabsTrigger>
          <TabsTrigger 
            value="documents"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-primary data-[state=active]:border-b-2 rounded-none px-4 pb-3"
          >
            <FileIcon className="mr-2 h-4 w-4" />
            Documents
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6">Customer Information</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-[24px_1fr] gap-4 items-center">
                  <Building2 className="h-6 w-6 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Company Name</div>
                    <div>FlowQi</div>
                  </div>
                </div>

                <div className="grid grid-cols-[24px_1fr] gap-4 items-center">
                  <Mail className="h-6 w-6 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email</div>
                    <div>serkan@flowqi.com</div>
                  </div>
                </div>

                <div className="grid grid-cols-[24px_1fr] gap-4 items-center">
                  <Star className="h-6 w-6 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Subscription Tier</div>
                    <div>Basic</div>
                  </div>
                </div>

                <div className="grid grid-cols-[24px_1fr] gap-4 items-center">
                  <CalendarDays className="h-6 w-6 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Last Login</div>
                    <div>06/01/2025</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users">
          <div className="text-sm text-muted-foreground">Users content coming soon...</div>
        </TabsContent>

        <TabsContent value="products">
          <div className="text-sm text-muted-foreground">Products content coming soon...</div>
        </TabsContent>

        <TabsContent value="subscriptions">
          <div className="text-sm text-muted-foreground">Subscriptions content coming soon...</div>
        </TabsContent>

        <TabsContent value="invoices">
          <div className="text-sm text-muted-foreground">Invoices content coming soon...</div>
        </TabsContent>

        <TabsContent value="tasks">
          <div className="text-sm text-muted-foreground">Tasks content coming soon...</div>
        </TabsContent>

        <TabsContent value="notes">
          <div className="text-sm text-muted-foreground">Notes content coming soon...</div>
        </TabsContent>

        <TabsContent value="documents">
          <div className="text-sm text-muted-foreground">Documents content coming soon...</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


