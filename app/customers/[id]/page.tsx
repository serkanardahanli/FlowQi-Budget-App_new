'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CreateCustomerForm } from "@/components/create-customer-form"

type Customer = {
  id: string
  name: string
  email: string
  status: string
}

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([
    { id: '1', name: 'Acme Inc', email: 'contact@acme.com', status: 'Active' },
    { id: '2', name: 'Globex Corporation', email: 'info@globex.com', status: 'Inactive' },
    { id: '3', name: 'Soylent Corp', email: 'hello@soylent.com', status: 'Active' },
  ])

  const handleNewCustomer = (newCustomer: Customer) => {
    setCustomers(prev => [...prev, newCustomer])
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Customers</h1>
        <CreateCustomerForm onSave={handleNewCustomer} />
      </div>

      <Card>
        <CardContent className="p-0">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-medium">Name</th>
                <th className="text-left p-4 font-medium">Email</th>
                <th className="text-left p-4 font-medium">Status</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b">
                  <td className="p-4">{customer.name}</td>
                  <td className="p-4">{customer.email}</td>
                  <td className="p-4">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                      customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <Link href={`/customers/${customer.id}`} className="text-blue-500 hover:underline">
                      View <ChevronRight className="inline h-4 w-4" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}
