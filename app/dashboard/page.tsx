import React from 'react'

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-2 mb-8">
        Welcome to your FlowQi dashboard. Here you can manage your budget and track your expenses.
      </p>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold">Total Budget</h2>
          <p className="mt-1">$5,000</p>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold">Expenses</h2>
          <p className="mt-1">$3,250</p>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold">Remaining</h2>
          <p className="mt-1">$1,750</p>
        </div>
      </div>
    </div>
  )
}


