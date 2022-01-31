import {
  collection,
  getFirestore,
  getDocs,
  Firestore,
  query,
  where,
  limit,
} from 'firebase/firestore'

import getFirebaseApp from '../backends/firebase'

const getAppCollections = async (collectionName: string) => {
  const db: Firestore = getFirestore(getFirebaseApp())
  const requestedCollection = collection(db, collectionName)
  const collSnapshot = await getDocs(requestedCollection)
  const data = collSnapshot.docs.map((doc) => doc.data())
  return data
}

const filterByInCollections = async (
  collectionName: string,
  filterBy: string,
  filterValue: string
) => {
  const db: Firestore = getFirestore(getFirebaseApp())
  const collectionRef = collection(db, collectionName)
  const filterQuery = query(collectionRef, where(filterBy, '==', filterValue), limit(1))
  const querySnapshot = await getDocs(filterQuery)
  return querySnapshot
}

export { getAppCollections, filterByInCollections }
