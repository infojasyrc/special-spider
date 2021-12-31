import {
  collection,
  getFirestore,
  getDocs,
  Firestore,
} from 'firebase/firestore'

import getFirebaseApp from '../backends/firebase'

const getAppCollections = async (collectionName: string) => {
  const db: Firestore = getFirestore(getFirebaseApp())
  const requestedCollection = collection(db, collectionName)
  const collSnapshot = await getDocs(requestedCollection)
  const data = collSnapshot.docs.map((doc) => doc.data())
  return data
}

export { getAppCollections }
