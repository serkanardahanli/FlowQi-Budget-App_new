import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AddTransactionForm } from "./AddTransactionForm"
import { useState } from "react"

export function AddTransactionModal() {
  const [open, setOpen] = useState(false)

  const handleAddTransaction = (transaction: { description: string; amount: number; category: string; date: string }) => {
    // Here you would typically save the transaction to your backend
    console.log('New transaction:', transaction)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Transaction</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Transaction</DialogTitle>
          <DialogDescription>
            Enter the details of your new transaction here.
          </DialogDescription>
        </DialogHeader>
        <AddTransactionForm
          onSubmit={handleAddTransaction}
          onCancel={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  )
}
