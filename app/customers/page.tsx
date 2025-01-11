import { Mail, Phone, MoreVertical } from 'lucide-react'

export default function CustomersPage() {
  const customers = [
    {
      id: 1,
      name: "Acme Corporation",
      contact: "John Doe",
      email: "john@acme.com",
      phone: "+1 234 567 890",
      status: "Active"
    },
    {
      id: 2,
      name: "TechStart Inc",
      contact: "Jane Smith",
      email: "jane@techstart.com",
      phone: "+1 234 567 891",
      status: "Active"
    },
    {
      id: 3,
      name: "Global Solutions",
      contact: "Mike Johnson",
      email: "mike@global.com",
      phone: "+1 234 567 892",
      status: "Inactive"
    }
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="text-left p-4 font-medium">Company</th>
              <th className="text-left p-4 font-medium">Contact</th>
              <th className="text-left p-4 font-medium">Status</th>
              <th className="text-left p-4 font-medium">Contact Info</th>
              <th className="w-16 p-4"></th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b">
                <td className="p-4 font-medium">{customer.name}</td>
                <td className="p-4">{customer.contact}</td>
                <td className="p-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    customer.status === 'Active' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {customer.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <a href={`mailto:${customer.email}`} className="text-gray-500 hover:text-gray-700">
                      <Mail className="h-5 w-5" />
                    </a>
                    <a href={`tel:${customer.phone}`} className="text-gray-500 hover:text-gray-700">
                      <Phone className="h-5 w-5" />
                    </a>
                  </div>
                </td>
                <td className="p-4">
                  <button className="text-gray-500 hover:text-gray-700">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


