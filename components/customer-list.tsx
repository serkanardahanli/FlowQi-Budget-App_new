import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

type Customer = {
  id: string
  name: string
  email: string
  status: 'Active' | 'Inactive'
  subscriptionTier: string
}

const customers: Customer[] = [
  { id: '1', name: 'Acme Inc', email: 'contact@acme.com', status: 'Active', subscriptionTier: 'Pro' },
  { id: '2', name: 'Globex Corporation', email: 'info@globex.com', status: 'Active', subscriptionTier: 'Enterprise' },
  { id: '3', name: 'Soylent Corp', email: 'hello@soylent.com', status: 'Inactive', subscriptionTier: 'Basic' },
  { id: '4', name: 'Initech', email: 'support@initech.com', status: 'Active', subscriptionTier: 'Pro' },
  { id: '5', name: 'Umbrella Corporation', email: 'contact@umbrella.com', status: 'Active', subscriptionTier: 'Enterprise' },
]

export function CustomerList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Subscription</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {customers.map((customer) => (
          <TableRow key={customer.id}>
            <TableCell className="font-medium">{customer.name}</TableCell>
            <TableCell>{customer.email}</TableCell>
            <TableCell>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                customer.status === 'Active' 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {customer.status}
              </span>
            </TableCell>
            <TableCell>{customer.subscriptionTier}</TableCell>
            <TableCell>
              <Button asChild variant="ghost" size="sm">
                <Link href={`/customers/${customer.id}`}>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
