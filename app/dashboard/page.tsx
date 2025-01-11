import React from 'react'

export default function DashboardPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome to your FlowQi dashboard. Here you can manage your budget and track your expenses.</p>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Budget</h2>
          <p className="text-3xl font-bold text-green-600">$5,000</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Expenses</h2>
          <p className="text-3xl font-bold text-red-600">$3,250</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Remaining</h2>
          <p className="text-3xl font-bold text-blue-600">$1,750</p>
        </div>
      </div>
    </div>
  )
}


