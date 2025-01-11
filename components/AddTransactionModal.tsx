'use client';

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

interface AddTransactionModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onAddTransaction: (transaction: {
    description: string;
    amount: number;
    category: string;
    date: string;
  }) => void;
}

export function AddTransactionModal({ isOpen, onOpenChange, onAddTransaction }: AddTransactionModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Transaction</DialogTitle>
          <DialogDescription>
            Enter the details of your new transaction below.
          </DialogDescription>
        </DialogHeader>
        <AddTransactionForm
          onSubmit={(transaction) => {
            onAddTransaction(transaction);
            onOpenChange(false);
          }}
          onCancel={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}

