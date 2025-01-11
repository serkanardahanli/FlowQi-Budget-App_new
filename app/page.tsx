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
      </main>
    </div>
  )
}
