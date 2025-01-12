import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

type CustomerData = {
  id: string
  number: string
  name: string
  email: string
  city: string
  country: string
  startDate: string
  endDate: string | null
  usersCount: number
  lastLogon: string
  status: string
}

type CreateCustomerFormProps = {
  onSave: (newCustomer: CustomerData) => void
}

const generateUniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
}

export function CreateCustomerForm({ onSave }: CreateCustomerFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [newCustomer, setNewCustomer] = useState<Omit<CustomerData, 'id'>>({
    number: '',
    name: '',
    email: '',
    city: '',
    country: '',
    startDate: new Date().toISOString().split('T')[0],
    endDate: null,
    usersCount: 0,
    lastLogon: new Date().toISOString(),
    status: 'Active'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewCustomer(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const customerWithId: CustomerData = {
      ...newCustomer,
      id: generateUniqueId()
    }
    onSave(customerWithId)
    setIsOpen(false)
    setNewCustomer({
      number: '',
      name: '',
      email: '',
      city: '',
      country: '',
      startDate: new Date().toISOString().split('T')[0],
      endDate: null,
      usersCount: 0,
      lastLogon: new Date().toISOString(),
      status: 'Active'
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Create New Customer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Customer</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Company Name</Label>
            <Input id="name" name="name" value={newCustomer.name} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={newCustomer.email} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="number">Customer Number</Label>
            <Input id="number" name="number" value={newCustomer.number} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input id="city" name="city" value={newCustomer.city} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="country">Country</Label>
            <Input id="country" name="country" value={newCustomer.country} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="status">Status</Label>
            <Input id="status" name="status" value={newCustomer.status} onChange={handleChange} required />
          </div>
          <Button type="submit">Create Customer</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
