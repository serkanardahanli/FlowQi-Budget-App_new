import { db } from '@/lib/firebase'
import { collection, addDoc, query, where, orderBy, limit, getDocs, serverTimestamp } from 'firebase/firestore'
import { Activity } from '@/types/activity'

const ACTIVITY_COLLECTION = 'activities'

export async function logActivity(activity: Omit<Activity, 'id' | 'timestamp'>): Promise<string> {
  try {
    const newActivity = {
      ...activity,
      timestamp: serverTimestamp(),
      performedBy: {
        id: 'current-user-id', // This should come from your auth context
        name: 'Current User'
      }
    }
    const docRef = await addDoc(collection(db, ACTIVITY_COLLECTION), newActivity)
    return docRef.id
  } catch (error) {
    console.error('Error logging activity:', error)
    throw error
  }
}

// Simplified query to match the index structure
export async function getActivitiesForEntity(entityType: string, entityId: string): Promise<Activity[]> {
  try {
    // This query matches the composite index we're creating
    const q = query(
      collection(db, ACTIVITY_COLLECTION),
      where('entityType', '==', entityType),
      where('entityId', '==', entityId),
      orderBy('timestamp', 'desc')
    )
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), timestamp: doc.data().timestamp.toDate() } as Activity))
  } catch (error) {
    console.error('Error fetching activities for entity:', error)
    throw error
  }
}

// Updated to match actual data structure
export async function getRecentActivities(customerId?: string, limitCount = 50): Promise<Activity[]> {
  try {
    let q = query(
      collection(db, ACTIVITY_COLLECTION),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    )

    if (customerId) {
      q = query(
        collection(db, ACTIVITY_COLLECTION),
        where('entityId', '==', customerId),
        where('entityType', '==', 'customer'),
        orderBy('timestamp', 'desc'),
        limit(limitCount)
      )
    }

    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), timestamp: doc.data().timestamp.toDate() } as Activity))
  } catch (error) {
    console.error('Error fetching activities:', error)
    throw error
  }
}

// Updated type to match actual data structure
export interface ActivityChange {
  field: string
  oldValue: any
  newValue: any
}

// Helper function to create activity with changes
export function createActivityWithChanges(
  entityType: string,
  entityId: string,
  action: 'create' | 'update' | 'delete',
  changes: ActivityChange[]
): Omit<Activity, 'id' | 'timestamp'> {
  return {
    action,
    entityType,
    entityId,
    changes,
    performedBy: {
      id: 'current-user-id', // This should come from your auth context
      name: 'Current User'
    }
  }
}

export interface Activity {
  id: string;
  entityType: string;
  entityId: string;
  timestamp: Date;
  // Add other fields as necessary
}

export async function getActivitiesByEntityType(entityType: string, entityId: string): Promise<Activity[]> {
  try {
    const q = query(
      collection(db, ACTIVITY_COLLECTION),
      where("entityType", "==", entityType),
      where("entityId", "==", entityId),
      orderBy("timestamp", "desc")
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      timestamp: doc.data().timestamp.toDate()
    } as Activity));
  } catch (error) {
    console.error('Error fetching activities:', error)
    throw error
  }
}

export async function getActivitiesByEntityId(entityId: string, entityType: string): Promise<Activity[]> {
  const q = query(
    collection(db, "activities"),
    where("entityId", "==", entityId),
    where("entityType", "==", entityType),
    orderBy("timestamp", "desc")
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    timestamp: doc.data().timestamp.toDate()
  } as Activity));
}

export { logActivity, getRecentActivities, getActivitiesForEntity, getActivitiesByEntityType, getActivitiesByEntityId }


