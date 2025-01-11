export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome to your FlowQi dashboard. Here you can manage your budget and track your expenses.
        </p>
      </div>
      
      <div className="grid gap-6">
        <div className="border-b pb-4">
          <h2 className="text-sm font-semibold text-muted-foreground mb-1">Total Budget</h2>
          <p className="text-2xl font-medium">$5,000</p>
        </div>
        
        <div className="border-b pb-4">
          <h2 className="text-sm font-semibold text-muted-foreground mb-1">Expenses</h2>
          <p className="text-2xl font-medium">$3,250</p>
        </div>
        
        <div className="border-b pb-4">
          <h2 className="text-sm font-semibold text-muted-foreground mb-1">Remaining</h2>
          <p className="text-2xl font-medium">$1,750</p>
        </div>
      </div>
    </div>
  )
}
