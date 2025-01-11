import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-blue-600">FlowQi</span>
        </h1>
        <p className="mt-3 text-2xl">
          Your personal budget management solution
        </p>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="/dashboard"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Dashboard &rarr;</h3>
            <p className="mt-4 text-xl">
              View your financial overview and recent transactions.
            </p>
          </a>

          <a
            href="/transactions"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Transactions &rarr;</h3>
            <p className="mt-4 text-xl">
              Manage and track your income and expenses.
            </p>
          </a>

          <a
            href="/budget"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Budget &rarr;</h3>
            <p className="mt-4 text-xl">
              Set and monitor your budgets for different categories.
            </p>
          </a>

          <a
            href="/reports"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Reports &rarr;</h3>
            <p className="mt-4 text-xl">
              Generate and view detailed financial reports.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}


