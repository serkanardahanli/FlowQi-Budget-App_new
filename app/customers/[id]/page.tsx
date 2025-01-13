'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { getCustomer } from '@/services/customer-service'
import { getActivitiesByEntityType, Activity } from '@/services/activity-service'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Building2, Mail, MapPin, Flag, FileText, Phone } from 'lucide-react'
import { EditCustomerForm } from "@/components/edit-customer-form"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"


export default function CustomerDetailPage() {
  const params = useParams()
  const customerId = params.id as string

  const [customer, setCustomer] = useState<any>(null)
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    async function fetchCustomerAndActivities() {
      try {
        const customerData = await getCustomer(customerId)
        setCustomer(customerData)

        const customerActivities = await getActivitiesByEntityType('customer', customerId)
        setActivities(customerActivities)
      } catch (error) {
        console.error('Error fetching customer data:', error)
      }
    }

    fetchCustomerAndActivities()
  }, [customerId])

  const handleSave = (updatedCustomer: any) => {
    setCustomer(updatedCustomer)
  }


  if (!customer) {
    return <div>Loading...</div>
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => window.history.back()}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Customers
          </Button>
          <h1 className="text-2xl font-bold">Customer Details</h1>
        </div>
        <div className="flex gap-2">
          <EditCustomerForm customer={customer} onSave={handleSave} />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{customer.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Email: {customer.email}</p>
          <p>Phone: {customer.phone}</p>
          {/* Add more customer details as needed */}
        </CardContent>
      </Card>

      <h2 className="text-xl font-semibold mt-6">Customer Activities</h2>
      {activities.map((activity) => (
        <Card key={activity.id} className="mb-4">
          <CardContent className="py-4">
            <p>Action: {activity.action}</p>
            <p>Timestamp: {activity.timestamp.toLocaleString()}</p>
            {activity.changes && (
              <div>
                <p>Changes:</p>
                <ul>
                  {activity.changes.map((change, index) => (
                    <li key={index}>
                      {change.field}: {change.oldValue} → {change.newValue}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
