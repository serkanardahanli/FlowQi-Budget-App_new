import { db } from '@/lib/firebase'
import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  serverTimestamp,
  Timestamp 
} from 'firebase/firestore'

// CustomerData type definition
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

const CUSTOMER_COLLECTION = 'customers'

export async function getCustomer(customerId: string): Promise<CustomerData | null> {
  const docRef = doc(db, CUSTOMER_COLLECTION, customerId)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as CustomerData
  } else {
    return null
  }
}

export async function getAllCustomers(): Promise<CustomerData[]> {
  const querySnapshot = await getDocs(collection(db, CUSTOMER_COLLECTION))
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as CustomerData))
}

export async function createCustomer(customerData: Omit<CustomerData, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  const newCustomerRef = doc(collection(db, CUSTOMER_COLLECTION))
  const newCustomer = {
    ...customerData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  }
  await setDoc(newCustomerRef, newCustomer)
  return newCustomerRef.id
}

export async function updateCustomer(customerId: string, customerData: Partial<CustomerData>): Promise<void> {
  const docRef = doc(db, CUSTOMER_COLLECTION, customerId)
  await updateDoc(docRef, {
    ...customerData,
    updatedAt: serverTimestamp()
  })
}

export async function deleteCustomer(customerId: string): Promise<void> {
  const docRef = doc(db, CUSTOMER_COLLECTION, customerId)
  await deleteDoc(docRef)
}

export async function getCustomerUserCount(customerId: string): Promise<number> {
  // In een echte applicatie zou je hier een query uitvoeren om het aantal gebruikers te tellen
  // Voor nu returnen we een placeholder waarde
  return 25
}

export async function getCustomerLastLogin(customerId: string): Promise<string | null> {
  // In een echte applicatie zou je hier een query uitvoeren om de laatste login tijd te vinden
  // Voor nu returnen we een placeholder waarde
  return new Date().toISOString()
}

// Functie om een testklant aan te maken
export async function createTestCustomer() {
  try {
    const testCustomerData = {
      number: 'TEST001',
      name: 'Test Company',
      email: 'test@example.com',
      phone: '1234567890',
      city: 'Test City',
      country: 'Test Country',
      address: 'Test Address',
      zipCode: '12345',
      timezone: 'UTC',
      startDate: new Date().toISOString(),
      endDate: null,
      usersCount: 1,
      lastLogon: new Date().toISOString(),
      status: 'Active',
      createdBy: 'System',
      type: 'Test',
      accountType: 'Free'
    }

    const customerId = await createCustomer(testCustomerData)
    console.log(`Test customer created with ID: ${customerId}`)
    return customerId
  } catch (error) {
    console.error('Error creating test customer:', error)
    throw error
  }
}
