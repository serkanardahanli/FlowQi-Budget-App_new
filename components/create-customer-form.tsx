import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Select from 'react-select'

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

type CreateCustomerFormProps = {
  onSave: (newCustomer: CustomerData) => void
}

const generateUniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
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

export function CreateCustomerForm({ onSave }: CreateCustomerFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [newCustomer, setNewCustomer] = useState<Omit<CustomerData, 'id'>>({
    number: '',
    name: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    address: '',
    zipCode: '',
    timezone: '',
    startDate: new Date().toISOString().split('T')[0],
    endDate: null,
    usersCount: 0,
    lastLogon: new Date().toISOString(),
    status: 'Active',
    createdBy: 'Current User', // This would come from your auth system
    createdAt: new Date().toISOString(),
    type: 'Default',
    accountType: 'Standard',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | { name: string; value: string }
  ) => {
    const { name, value } = 'target' in e ? e.target : e
    setNewCustomer(prev => ({ ...prev, [name]: value }))

    // If country changes, reset city
    if (name === 'country') {
      setNewCustomer(prev => ({ ...prev, city: '' }))
    }
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
      phone: '',
      city: '',
      country: '',
      address: '',
      zipCode: '',
      timezone: '',
      startDate: new Date().toISOString().split('T')[0],
      endDate: null,
      usersCount: 0,
      lastLogon: new Date().toISOString(),
      status: 'Active',
      createdBy: 'Current User',
      createdAt: new Date().toISOString(),
      type: 'Default',
      accountType: 'Standard',
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Create New Customer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create New Customer</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="number">Customer Number</Label>
              <Input id="number" name="number" value={newCustomer.number} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="name">Company Name</Label>
              <Input id="name" name="name" value={newCustomer.name} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={newCustomer.email} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" value={newCustomer.phone} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input id="address" name="address" value={newCustomer.address} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="zipCode">Zip Code</Label>
              <Input id="zipCode" name="zipCode" value={newCustomer.zipCode} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Select
                id="country"
                name="country"
                options={countryOptions}
                value={countryOptions.find(option => option.value === newCustomer.country)}
                onChange={(option) => handleChange({ name: 'country', value: option?.value || '' })}
              />
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Select
                id="city"
                name="city"
                options={cityOptions[newCustomer.country as keyof typeof cityOptions] || []}
                value={cityOptions[newCustomer.country as keyof typeof cityOptions]?.find(option => option.value === newCustomer.city)}
                onChange={(option) => handleChange({ name: 'city', value: option?.value || '' })}
                isDisabled={!newCustomer.country}
              />
            </div>
            <div>
              <Label htmlFor="timezone">Timezone</Label>
              <Input id="timezone" name="timezone" value={newCustomer.timezone} onChange={handleChange} required />
            </div>
          </div>
          <Button type="submit">Create Customer</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
