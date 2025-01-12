import { Timestamp } from 'firebase/firestore'

export type CustomerData = {
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
  createdAt: Timestamp
  updatedAt: Timestamp
  type: string
  accountType: string
}


