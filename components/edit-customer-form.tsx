k'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { logActivity } from '@/services/activity-service'
import Select from 'react-select'

type CustomerData = {
  id: string
  number: string
  name: string
  email: string
  phone: string
  address: string
  country: string
  city: string
  // ... other fields
}

type EditCustomerFormProps = {
  customer: CustomerData
  onSave: (updatedCustomer: CustomerData) => void
}

const countryOptions = [
  { value: 'turkey', label: 'Turkey' },
  { value: 'usa', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  // Add more countries as needed
]

const cityOptions = {
  turkey: [
    { value: 'ankara', label: 'Ankara' },
    { value: 'istanbul', label: 'Istanbul' },
    // Add more cities as needed
  ],
  usa: [
    { value: 'new-york', label: 'New York' },
    { value: 'los-angeles', label: 'Los Angeles' },
    // Add more cities as needed
  ],
  uk: [
    { value: 'london', label: 'London' },
    { value: 'manchester', label: 'Manchester' },
    // Add more cities as needed
  ],
}

export function EditCustomerForm({ customer, onSave }: EditCustomerFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [editedCustomer, setEditedCustomer] = useState(customer)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | { name: string; value: string }
  ) => {
    const { name, value } = 'target' in e ? e.target : e
    setEditedCustomer(prev => ({ ...prev, [name]: value }))

    // If country changes, reset city
    if (name === 'country') {
      setEditedCustomer(prev => ({ ...prev, city: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Track what fields were changed
    const changes = Object.entries(editedCustomer).reduce((acc, [key, value]) => {
      if (customer[key as keyof CustomerData] !== value) {
        acc.push({
          field: key,
          oldValue: customer[key as keyof CustomerData],
          newValue: value
        })
      }
      return acc
    }, [] as { field: string, oldValue: string, newValue: string }[])

    // Log the activity
    await logActivity({
      action: 'update',
      entityType: 'customer',
      entityId: customer.id,
      changes,
      performedBy: {
        id: 'current-user-id', // This would come from your auth system
        name: 'Current User'
      }
    })

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
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              name="email" 
              type="email"
              value={editedCustomer.email} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input 
              id="phone" 
              name="phone" 
              value={editedCustomer.phone} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input 
              id="address" 
              name="address" 
              value={editedCustomer.address} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <Label htmlFor="country">Country</Label>
            <Select
              id="country"
              name="country"
              options={countryOptions}
              value={countryOptions.find(option => option.value === editedCustomer.country)}
              onChange={(option) => handleChange({ name: 'country', value: option?.value || '' })}
            />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Select
              id="city"
              name="city"
              options={cityOptions[editedCustomer.country as keyof typeof cityOptions] || []}
              value={cityOptions[editedCustomer.country as keyof typeof cityOptions]?.find(option => option.value === editedCustomer.city)}
              onChange={(option) => handleChange({ name: 'city', value: option?.value || '' })}
              isDisabled={!editedCustomer.country}
            />
          </div>
          <Button type="submit">Save Changes</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
