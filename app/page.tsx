import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-4 sm:px-20 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Welcome to <span className="text-blue-600">FlowQi</span>
        </h1>
        <p className="mt-3 text-xl sm:text-2xl mb-8">
          Your personal budget management solution
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
          <Link href="/dashboard" className="p-6 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600 transition duration-150 ease-in-out">
            <h3 className="text-2xl font-bold mb-2">Dashboard &rarr;</h3>
            <p className="text-xl">
              View your financial overview and recent transactions.
            </p>
          </Link>

          <Link href="/transactions" className="p-6 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600 transition duration-150 ease-in-out">
            <h3 className="text-2xl font-bold mb-2">Transactions &rarr;</h3>
            <p className="text-xl">
              Manage and track your income and expenses.
            </p>
          </Link>

          <Link href="/budget" className="p-6 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600 transition duration-150 ease-in-out">
            <h3 className="text-2xl font-bold mb-2">Budget &rarr;</h3>
            <p className="text-xl">
              Set and monitor your budgets for different categories.
            </p>
          </Link>

          <Link href="/reports" className="p-6 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600 transition duration-150 ease-in-out">
            <h3 className="text-2xl font-bold mb-2">Reports &rarr;</h3>
            <p className="text-xl">
              Generate and view detailed financial reports.
            </p>
          </Link>
        </div>
      </main>
    </div>
  )
}


