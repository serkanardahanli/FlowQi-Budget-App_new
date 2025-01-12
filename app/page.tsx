'use client'

import { useState } from 'react'
import { createTestCustomer } from '../services/customer-service'

export default function Home() {
  const [message, setMessage] = useState<string | null>(null)

  const handleCreateTestCustomer = async () => {
    try {
      const customerId = await createTestCustomer()
      setMessage(`Test customer created with ID: ${customerId}`)
    } catch (error) {
      setMessage('Error creating test customer. Check console for details.')
      console.error(error)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to FlowQi</h1>
      <button
        onClick={handleCreateTestCustomer}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Create Test Customer
      </button>
      {message && (
        <p className="mt-4 p-4 bg-gray-100 rounded">{message}</p>
      )}
    </main>
  )
}
