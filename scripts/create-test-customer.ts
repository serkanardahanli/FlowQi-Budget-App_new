import { createCustomer } from '../services/customer-service'

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
  } catch (error) {
    console.error('Error creating test customer:', error)
  }
}


