import { Activity } from '@/types/activity'

export async function logActivity(activity: Omit<Activity, 'id' | 'timestamp'>) {
  // In een echte applicatie zou dit een API-aanroep doen om de activiteit op te slaan
  const newActivity: Activity = {
    ...activity,
    id: Date.now().toString(),
    timestamp: new Date().toISOString()
  }

  console.log('Logging activity:', newActivity)
  return newActivity
}

export async function getActivitiesForEntity(entityType: string, entityId: string): Promise<Activity[]> {
  // In een echte applicatie zou dit activiteiten ophalen van je backend
  console.log(`Fetching activities for ${entityType} with id ${entityId}`)
  return []
}
