'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
  category: string;
}

interface RecentTransactionsProps {
  transactions: Transaction[];
}

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  if (transactions.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <p>No recent transactions found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
      <ul className="space-y-4">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="font-medium">{transaction.description}</p>
              <p className="text-sm text-gray-500">{transaction.category} - {transaction.date}</p>
            </div>
            <span className={`font-semibold ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
              ${Math.abs(transaction.amount).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <Button variant="outline" className="w-full">View All Transactions</Button>
      </div>
    </div>
  );
}

