'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Building2, Mail, MapPin, Flag, CalendarIcon, UserCheck, Power, FileText, Phone, Globe } from 'lucide-react'
import { EditCustomerForm } from "@/components/edit-customer-form"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { getCustomerUserCount, getCustomerLastLogin } from '@/services/customer-service'
import { getActivitiesForEntity } from '@/services/activity-service'

type CustomerData = {
  id: string
  number: string
  name: string
  email: string
  phone: string
  city: string
  country: string
  address: string
  zipCode: string
  timezone: string
  startDate: string
  endDate: string | null
  usersCount: number
  lastLogon: string
  status: string
  createdBy: string
  createdAt: string
  type: string
  accountType: string
}

export default function CustomerDetailPage() {
  const router = useRouter()
  const params = useParams()
  const customerId = params.id as string

  const [customerData, setCustomerData] = useState<CustomerData | null>(null)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [systemInfo, setSystemInfo] = useState({
    userCount: 0,
    lastLogin: null,
    activities: []
  })

  useEffect(() => {
    // In een echte applicatie zou je hier de klantgegevens ophalen op basis van het ID
    setCustomerData({
      id: customerId,
      number: '30492',
      name: 'Solution of Global Lojistik',
      email: 'sglogistic@sglogistic.com.tr',
      phone: '03122783406',
      city: 'Ankara',
      country: 'Turkey',
      address: 'Sanayi Bulvari Officium Ismerkezi 2217',
      zipCode: '06000',
      timezone: 'Turkey - Turkey Time (+03:00)',
      startDate: '2023-01-15',
      endDate: null,
      usersCount: 25,
      lastLogon: '2025-01-06T14:30:00Z',
      status: 'Active',
      createdBy: 'Serkan Ardahanli',
      createdAt: '2023-03-11T09:00:00Z',
      type: 'Default',
      accountType: 'Standard',
    })
  }, [customerId])

  useEffect(() => {
    async function loadSystemInfo() {
      if (customerData?.id) {
        const [userCount, lastLogin, activities] = await Promise.all([
          getCustomerUserCount(customerData.id),
          getCustomerLastLogin(customerData.id),
          getActivitiesForEntity('customer', customerData.id)
        ])

        setSystemInfo({
          userCount,
          lastLogin,
          activities
        })
      }
    }

    loadSystemInfo()
  }, [customerData?.id])

  const handleSave = (updatedCustomer: CustomerData) => {
    setCustomerData(updatedCustomer)
  }

  const handleDelete = () => {
    setIsDeleteDialogOpen(false)
    router.push('/customers')
  }

  if (!customerData) {
    return <div>Loading...</div>
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => router.push('/customers')}>
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

      <Tabs defaultValue="general">
        <TabsList className="w-full border-b h-auto p-0 bg-transparent">
          <TabsTrigger value="general" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
            General
          </TabsTrigger>
          <TabsTrigger value="sales" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
            Sales
          </TabsTrigger>
          <TabsTrigger value="products" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
            Products
          </TabsTrigger>
          <TabsTrigger value="invoices" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
            Invoice settings
          </TabsTrigger>
          <TabsTrigger value="orders" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
            Latest orders
          </TabsTrigger>
          <TabsTrigger value="contacts" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
            Contactpersons
          </TabsTrigger>
          <TabsTrigger value="contract" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
            Contract
          </TabsTrigger>
          <TabsTrigger value="notes" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
            Notes
          </TabsTrigger>
          <TabsTrigger value="auth" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
            Authorizations
          </TabsTrigger>
          <TabsTrigger value="communication" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
            Communication
          </TabsTrigger>
          <TabsTrigger value="vehicles" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
            Vehicle suppliers
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">General Information</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-[24px_1fr] gap-4 items-center">
                    <FileText className="h-6 w-6 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Customer ID</div>
                      <div>{customerData.number}</div>
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
                      <div className="text-sm text-muted-foreground mb-1">Email</div>
                      <div>{customerData.email}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[24px_1fr] gap-4 items-center">
                    <Phone className="h-6 w-6 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Phone</div>
                      <div>{customerData.phone}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[24px_1fr] gap-4 items-center">
                    <MapPin className="h-6 w-6 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Address</div>
                      <div>{customerData.address}</div>
                      <div>{customerData.zipCode} {customerData.city}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[24px_1fr] gap-4 items-center">
                    <Flag className="h-6 w-6 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Country</div>
                      <div>{customerData.country}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">System Information</h2>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Type</div>
                    <div>{customerData.type}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Account Type</div>
                    <div>{customerData.accountType}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Status</div>
                    <div>{customerData.status}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Created By</div>
                    <div>{customerData.createdBy}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Created At</div>
                    <div>{new Date(customerData.createdAt).toLocaleDateString()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Last Login</div>
                    <div>
                      {systemInfo.lastLogin 
                        ? new Date(systemInfo.lastLogin).toLocaleString()
                        : 'Never logged in'}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Active Users</div>
                    <div>{systemInfo.userCount}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sales">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6">Sales Information</h2>
              <p className="text-muted-foreground">Sales information will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Other tab contents would follow the same pattern */}
      </Tabs>
    </div>
  )
}
