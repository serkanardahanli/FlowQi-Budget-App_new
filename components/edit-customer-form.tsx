import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

type CustomerData = {
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

type EditCustomerFormProps = {
  customer: CustomerData
  onSave: (updatedCustomer: CustomerData) => void
}

export function EditCustomerForm({ customer, onSave }: EditCustomerFormProps) {
  const [editedCustomer, setEditedCustomer] = useState(customer)
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditedCustomer(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(editedCustomer)
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Customer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Customer Information</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Company Name</Label>
            <Input id="name" name="name" value={editedCustomer.name} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input id="city" name="city" value={editedCustomer.city} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="country">Country</Label>
            <Input id="country" name="country" value={editedCustomer.country} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="status">Status</Label>
            <Input id="status" name="status" value={editedCustomer.status} onChange={handleChange} />
          </div>
          <Button type="submit">Save Changes</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}


