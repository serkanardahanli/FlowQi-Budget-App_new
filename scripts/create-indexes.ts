import * as admin from 'firebase-admin';
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import * as serviceAccount from '../serviceAccountKey.json';

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});

async function createIndexes() {
  const db: Firestore = getFirestore();
  
  console.log('Firestore initialized. Please use the Firebase Console or firebase.json to create indexes.');
  console.log('Here are the indexes you need to create:');
  console.log('1. Collection: activities');
  console.log('   Fields: entityType (Ascending), entityId (Ascending), timestamp (Descending)');
  console.log('2. Collection: activities');
  console.log('   Fields: entityId (Ascending), entityType (Ascending), timestamp (Descending)');
  
  console.log('\nPlease ensure these indexes are created in your Firestore database.');
  console.log('You can create them manually in the Firebase Console or by deploying the firebase.json file.');
  
  process.exit(0);
}

createIndexes().catch((error: Error) => {
  console.error('An error occurred:', error);
  process.exit(1);
});
