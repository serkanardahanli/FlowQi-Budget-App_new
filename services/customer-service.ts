import { auth } from '@/lib/firebase'

export async function getCustomerUserCount(customerId: string): Promise<number> {
  // In een echte applicatie zou dit een query naar je gebruikersdatabase zijn
  // om gebruikers te tellen die geassocieerd zijn met deze klant
  console.log(`Fetching user count for customer ${customerId}`)
  return 25 // Placeholder waarde
}

export async function getCustomerLastLogin(customerId: string): Promise<string | null> {
  // In een echte applicatie zou dit een query naar Firebase Authentication zijn
  // om de laatste inlogtijd van een gebruiker van deze klant te krijgen
  
  console.log(`Fetching last login for customer ${customerId}`)
  
  // Voorbeeld van hoe je dit zou kunnen doen met Firebase:
  // const users = await auth.listUsers()
  // const customerUsers = users.filter(user => user.customClaims?.customerId === customerId)
  // const lastLogin = Math.max(...customerUsers.map(user => user.metadata.lastSignInTime))

  // Voor nu retourneren we een placeholder waarde
  return new Date().toISOString()
}
