import { FileText, Download, MoreVertical } from 'lucide-react'

export default function InvoicesPage() {
  const invoices = [
    {
      id: "INV-2024-001",
      customer: "Acme Corporation",
      amount: "€2,400.00",
      status: "Paid",
      date: "Jan 15, 2024"
    },
    {
      id: "INV-2024-002",
      customer: "TechStart Inc",
      amount: "€1,800.00",
      status: "Pending",
      date: "Jan 14, 2024"
    },
    {
      id: "INV-2024-003",
      customer: "Global Solutions",
      amount: "€3,600.00",
      status: "Overdue",
      date: "Jan 10, 2024"
    }
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Invoices</h1>
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="text-left p-4 font-medium">Invoice</th>
              <th className="text-left p-4 font-medium">Customer</th>
              <th className="text-left p-4 font-medium">Amount</th>
              <th className="text-left p-4 font-medium">Status</th>
              <th className="text-left p-4 font-medium">Date</th>
              <th className="w-20 p-4"></th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-b">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-gray-400" />
                    <span className="font-medium">{invoice.id}</span>
                  </div>
                </td>
                <td className="p-4">{invoice.customer}</td>
                <td className="p-4 font-medium">{invoice.amount}</td>
                <td className="p-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    invoice.status === 'Paid' 
                      ? 'bg-green-100 text-green-800'
                      : invoice.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {invoice.status}
                  </span>
                </td>
                <td className="p-4 text-gray-500">{invoice.date}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <button className="text-gray-500 hover:text-gray-700">
                      <Download className="h-5 w-5" />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


