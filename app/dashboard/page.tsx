import React from 'react'

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="mb-8">
        Welcome to your FlowQi dashboard. Here you can manage your budget and track your expenses.
      </p>
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold mb-2">Total Budget</h2>
          <p className="text-3xl">$5,000</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Expenses</h2>
          <p className="text-3xl">$3,250</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Remaining</h2>
          <p className="text-3xl">$1,750</p>
        </div>
      </div>
    </div>
  )
}


