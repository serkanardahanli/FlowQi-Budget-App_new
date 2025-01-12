export type Activity = {
  id: string
  action: 'create' | 'update' | 'delete'
  entityType: 'customer' | 'user' | 'product'
  entityId: string
  changes?: {
    field: string
    oldValue: string
    newValue: string
  }[]
  performedBy: {
    id: string
    name: string
  }
  timestamp: string
}
