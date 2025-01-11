import { Package, MoreVertical } from 'lucide-react'

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Basic Plan",
      description: "Perfect for small businesses",
      price: "€29/month",
      status: "Active",
      users: 10
    },
    {
      id: 2,
      name: "Pro Plan",
      description: "For growing companies",
      price: "€99/month",
      status: "Active",
      users: 50
    },
    {
      id: 3,
      name: "Enterprise Plan",
      description: "Custom solutions for large organizations",
      price: "Custom",
      status: "Active",
      users: "Unlimited"
    }
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Package className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                </div>
              </div>
              <button className="text-gray-500 hover:text-gray-700">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Price</span>
                <span className="font-medium">{product.price}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Users</span>
                <span className="font-medium">{product.users}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Status</span>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  product.status === 'Active' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {product.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


