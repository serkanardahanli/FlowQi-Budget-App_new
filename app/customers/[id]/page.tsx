'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Activity, Users, Package, FileText, Calendar, MessageSquare, FileIcon, Building2, Mail, MapPin, Flag, CalendarIcon, UserCheck, Power } from 'lucide-react'
import { EditCustomerForm } from "@/components/edit-customer-form"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"

type CustomerData = {
  id: string
  number: string
  name: string
  city: string
  country: string
  startDate: string
  endDate: string | null
  usersCount: number
  lastLogon: string
  status: string
}

export default function CustomerDetailPage() {
  const router = useRouter()
  const params = useParams()
  const customerId = params.id

  // In een echte applicatie zou je hier de klantgegevens ophalen op basis van het ID
  const [customerData, setCustomerData] = useState<CustomerData>({
  id: '1', // Dit zou normaal gesproken van de backend komen
  number: '30492',
  name: 'Solution of Global Lojistik',
  city: 'Ankara',
  country: 'Turkey',
  startDate: '2023-01-15',
  endDate: null,
  usersCount: 25,
  lastLogon: '2025-01-06T14:30:00Z',
  status: 'Active'
})

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  const handleSave = (updatedCustomer: CustomerData) => {
    setCustomerData(updatedCustomer)
    // In a real application, you would send this data to your backend
    console.log('Saving updated customer data:', updatedCustomer)
  }

  const handleDelete = () => {
    // In a real application, you would send a delete request to your backend
    console.log('Deleting customer:', customerId)
    setIsDeleteDialogOpen(false)
    router.push('/customers')
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => router.back()}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Customers
          </Button>
          <h1 className="text-2xl font-bold">Customer Details</h1>
        </div>
        <div className="flex gap-2">
          <EditCustomerForm customer={customerData} onSave={handleSave} />
          <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="destructive">Delete Customer</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure you want to delete this customer?</DialogTitle>
              </DialogHeader>
              <p>This action cannot be undone.</p>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
                <Button variant="destructive" onClick={handleDelete}>Delete</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
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
                  <FileText className="h-6 w-6 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Customer ID</div>
                    <div>{customerData.id}</div>
                  </div>
                </div>
                <div className="grid grid-cols-[24px_1fr] gap-4 items-center">
                  <Building2 className="h-6 w-6 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Company Name</div>
                    <div>{customerData.name}</div>
                  </div>
                </div>

                <div className="grid grid-cols-[24px_1fr] gap-4 items-center">
                  <Mail className="h-6 w-6 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Customer Number</div>
                    <div>{customerData.number}</div>
                  </div>
                </div>

                <div className="grid grid-cols-[24px_1fr] gap-4 items-center">
                  <MapPin className="h-6 w-6 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">City</div>
                    <div>{customerData.city}</div>
                  </div>
                </div>

                <div className="grid grid-cols-[24px_1fr] gap-4 items-center">
                  <Flag className="h-6 w-6 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Country</div>
                    <div>{customerData.country}</div>
                  </div>
                </div>

                <div className="grid grid-cols-[24px_1fr] gap-4 items-center">
                  <CalendarIcon className="h-6 w-6 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Start Date</div>
                    <div>{new Date(customerData.startDate).toLocaleDateString()}</div>
                  </div>
                </div>

                <div className="grid grid-cols-[24px_1fr] gap-4 items-center">
                  <CalendarIcon className="h-6 w-6 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">End Date</div>
                    <div>{customerData.endDate ? new Date(customerData.endDate).toLocaleDateString() : 'N/A'}</div>
                  </div>
                </div>

                <div className="grid grid-cols-[24px_1fr] gap-4 items-center">
                  <UserCheck className="h-6 w-6 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Active Users Count</div>
                    <div>{customerData.usersCount}</div>
                  </div>
                </div>

                <div className="grid grid-cols-[24px_1fr] gap-4 items-center">
                  <CalendarIcon className="h-6 w-6 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Last Login</div>
                    <div>{new Date(customerData.lastLogon).toLocaleString()}</div>
                  </div>
                </div>

                <div className="grid grid-cols-[24px_1fr] gap-4 items-center">
                  <Power className="h-6 w-6 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Status</div>
                    <div>{customerData.status}</div>
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


