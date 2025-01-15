'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AddTransactionForm } from "./AddTransactionForm";

export function AddTransactionModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddTransaction = (transaction: {
    description: string;
    amount: number;
    category: string;
    date: string;
  }) => {
    // Here you would typically save the transaction to your backend
    console.log('New transaction:', transaction);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Transaction</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Transaction</DialogTitle>
          <DialogDescription>
            Enter the details of your new transaction below.
          </DialogDescription>
        </DialogHeader>
        <AddTransactionForm
          onSubmit={handleAddTransaction}
          onCancel={() => setIsOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
