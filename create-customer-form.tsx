	import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Select from 'react-select'
import { countriesAndCities } from '@/data/countries-cities'
import { Customer } from '@/types/customer'

type CreateCustomerFormProps = {
  onSave: (newCustomer: Customer) => void
}

const generateUniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
}

export function CreateCustomerForm({ onSave }: CreateCustomerFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [newCustomer, setNewCustomer] = useState<Omit<Customer, 'id' | 'createdAt' | 'updatedAt'>>({
    customerNumber: '',
    name: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      postalCode: '',
      country: ''
    },
    status: 'active',
    subscription: {
      type: 'Monthly',
      startDate: new Date(),
      status: 'active',
      maxUsers: 5
    },
    modules: [],
    payedUserCount: 0
  })
  const [errors, setErrors] = useState<Partial<Record<keyof Customer, string>>>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | { name: string; value: string }
  ) => {
    const { name, value } = 'target' in e ? e.target : e
    setNewCustomer(prev => {
      if (name === 'street' || name === 'city' || name === 'postalCode' || name === 'country') {
        return { ...prev, address: { ...prev.address, [name]: value } }
      }
      return { ...prev, [name]: value }
    })
  }

  const validateForm = () => {
    const newErrors: Partial<Record<keyof Customer, string>> = {}
    if (!newCustomer.customerNumber) newErrors.customerNumber = 'Customer number is required'
    if (!newCustomer.name) newErrors.name = 'Company name is required'
    if (!newCustomer.email) newErrors.email = 'Email is required'
    if (!newCustomer.phone) newErrors.phone = 'Phone is required'
    if (!newCustomer.address.street) newErrors['address.street'] = 'Street is required'
    if (!newCustomer.address.city) newErrors['address.city'] = 'City is required'
    if (!newCustomer.address.postalCode) newErrors['address.postalCode'] = 'Postal code is required'
    if (!newCustomer.address.country) newErrors['address.country'] = 'Country is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      const customerWithId: Customer = {
        ...newCustomer,
        id: generateUniqueId(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
      onSave(customerWithId)
      setIsOpen(false)
      setNewCustomer({
        customerNumber: '',
        name: '',
        email: '',
        phone: '',
        address: {
          street: '',
          city: '',
          postalCode: '',
          country: ''
        },
        status: 'active',
        subscription: {
          type: 'Monthly',
          startDate: new Date(),
          status: 'active',
          maxUsers: 5
        },
        modules: [],
        payedUserCount: 0
      })
    }
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
              <Label htmlFor="customerNumber">Customer Number</Label>
              <Input 
                id="customerNumber" 
                name="customerNumber" 
                value={newCustomer.customerNumber} 
                onChange={handleChange} 
                required 
              />
              {errors.customerNumber && <p className="text-red-500 text-sm">{errors.customerNumber}</p>}
            </div>
            <div>
              <Label htmlFor="name">Company Name</Label>
              <Input 
                id="name" 
                name="name" 
                value={newCustomer.name} 
                onChange={handleChange} 
                required 
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={newCustomer.email} 
                onChange={handleChange} 
                required 
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input 
                id="phone" 
                name="phone" 
                value={newCustomer.phone} 
                onChange={handleChange} 
                required 
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <div>
              <Label htmlFor="street">Street</Label>
              <Input 
                id="street" 
                name="street" 
                value={newCustomer.address.street} 
                onChange={handleChange} 
                required 
              />
              {errors['address.street'] && <p className="text-red-500 text-sm">{errors['address.street']}</p>}
            </div>
            <div>
              <Label htmlFor="postalCode">Postal Code</Label>
              <Input 
                id="postalCode" 
                name="postalCode" 
                value={newCustomer.address.postalCode} 
                onChange={handleChange} 
                required 
              />
              {errors['address.postalCode'] && <p className="text-red-500 text-sm">{errors['address.postalCode']}</p>}
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Select
                id="country"
                name="country"
                options={Object.entries(countriesAndCities).map(([key, value]) => ({ value: key, label: value.name }))}
                value={{ value: newCustomer.address.country, label: countriesAndCities[newCustomer.address.country as keyof typeof countriesAndCities]?.name }}
                onChange={(option) => handleChange({ name: 'country', value: option?.value || '' })}
              />
              {errors['address.country'] && <p className="text-red-500 text-sm">{errors['address.country']}</p>}
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Select
                id="city"
                name="city"
                options={countriesAndCities[newCustomer.address.country as keyof typeof countriesAndCities]?.cities.map(city => ({ value: city, label: city })) || []}
                value={{ value: newCustomer.address.city, label: newCustomer.address.city }}
                onChange={(option) => handleChange({ name: 'city', value: option?.value || '' })}
                isDisabled={!newCustomer.address.country}
              />
              {errors['address.city'] && <p className="text-red-500 text-sm">{errors['address.city']}</p>}
            </div>
          </div>
          <Button type="submit">Create Customer</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
