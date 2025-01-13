import { db } from '@/lib/firebase'
import { collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc, serverTimestamp, Timestamp } from 'firebase/firestore'
import { Customer } from '@/types/customer'

const CUSTOMER_COLLECTION = 'customers'

export async function getAllCustomers(): Promise<Customer[]> {
  try {
    const customersRef = collection(db, CUSTOMER_COLLECTION)
    const snapshot = await getDocs(customersRef)
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Customer))
  } catch (error) {
    console.error('Error fetching customers:', error)
    throw error
  }
}

export async function createCustomer(customerData: Omit<Customer, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  try {
    const newCustomer = {
      ...customerData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    }
    const docRef = await addDoc(collection(db, CUSTOMER_COLLECTION), newCustomer)
    return docRef.id
  } catch (error) {
    console.error('Error creating customer:', error)
    throw error
  }
}

export async function getCustomer(customerId: string): Promise<Customer | null> {
  try {
    const docRef = doc(db, CUSTOMER_COLLECTION, customerId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Customer
    }
    return null
  } catch (error) {
    console.error('Error fetching customer:', error)
    throw error
  }
}

export async function updateCustomer(customerId: string, customerData: Partial<Customer>): Promise<void> {
  try {
    const docRef = doc(db, CUSTOMER_COLLECTION, customerId)
    await updateDoc(docRef, {
      ...customerData,
      updatedAt: serverTimestamp()
    })
  } catch (error) {
    console.error('Error updating customer:', error)
    throw error
  }
}

export async function deleteCustomer(customerId: string): Promise<void> {
  try {
    const docRef = doc(db, CUSTOMER_COLLECTION, customerId)
    await deleteDoc(docRef)
  } catch (error) {
    console.error('Error deleting customer:', error)
    throw error
  }
}

export async function createTestCustomer(): Promise<string> {
  const testCustomerData: Omit<Customer, 'id' | 'createdAt' | 'updatedAt'> = {
    name: 'Test Company',
    email: 'test@example.com',
    phone: '+31612345678',
    address: {
      street: 'Test Street 123',
      city: 'Amsterdam',
      postalCode: '1234 AB',
      country: 'Netherlands'
    },
    status: 'active',
    customerNumber: `TEST${Date.now().toString().slice(-6)}`,
    subscription: {
      type: 'Monthly',
      startDate: new Date(),
      status: 'active',
      maxUsers: 5
    },
    modules: [
      {
        id: 'budget',
        name: 'Budget Module',
        enabled: true
      }
    ],
    payedUserCount: 1
  };

  return await createCustomer(testCustomerData);
}

export async function getCustomerLastLogin(customerId: string): Promise<Date | null> {
  try {
    const docRef = doc(db, CUSTOMER_COLLECTION, customerId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const customerData = docSnap.data();
      return customerData.lastLogin ? customerData.lastLogin.toDate() : null;
    }
    return null;
  } catch (error) {
    console.error('Error fetching customer last login:', error);
    throw error;
  }
}

export async function getCustomerUserCount(customerId: string): Promise<number> {
  try {
    const docRef = doc(db, CUSTOMER_COLLECTION, customerId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const customerData = docSnap.data();
      return customerData.payedUserCount || 0;
    }
    return 0;
  } catch (error) {
    console.error('Error fetching customer user count:', error);
    throw error;
  }
}

export {
  getAllCustomers,
  createCustomer,
  getCustomer,
  updateCustomer,
  deleteCustomer,
  createTestCustomer,
  getCustomerLastLogin,
  getCustomerUserCount
};


