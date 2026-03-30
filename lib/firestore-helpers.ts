import { db, isConfigured } from '@/lib/firebase'
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
  Timestamp,
  Firestore,
} from 'firebase/firestore'
import { mockFetchCollection, mockAddDocument, mockUpdateDocument, mockDeleteDocument } from '@/lib/mock-data'

export const isMockMode = !isConfigured && process.env.NODE_ENV !== 'production'

export interface FirestoreDoc {
  id: string
  [key: string]: any
}

function getDb(): Firestore {
  if (!db) throw new Error('Firebase not configured')
  return db
}

export async function fetchCollection(collectionName: string, orderField = 'createdAt'): Promise<FirestoreDoc[]> {
  if (isMockMode) {
    return mockFetchCollection(collectionName)
  }
  const database = getDb()
  try {
    const q = query(collection(database, collectionName), orderBy(orderField, 'desc'))
    const snapshot = await getDocs(q)
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
  } catch {
    const snapshot = await getDocs(collection(database, collectionName))
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
  }
}

export async function addDocument(collectionName: string, data: Record<string, any>) {
  if (isMockMode) {
    return mockAddDocument(collectionName, data)
  }
  const database = getDb()
  return addDoc(collection(database, collectionName), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}

export async function updateDocument(collectionName: string, docId: string, data: Record<string, any>) {
  if (isMockMode) {
    return mockUpdateDocument(collectionName, docId, data)
  }
  const database = getDb()
  const ref = doc(database, collectionName, docId)
  return updateDoc(ref, {
    ...data,
    updatedAt: serverTimestamp(),
  })
}

export async function deleteDocument(collectionName: string, docId: string) {
  if (isMockMode) {
    return mockDeleteDocument(collectionName, docId)
  }
  const database = getDb()
  const ref = doc(database, collectionName, docId)
  return deleteDoc(ref)
}

export function formatTimestamp(ts: any): string {
  if (!ts) return '-'
  if (ts instanceof Timestamp) {
    return ts.toDate().toLocaleDateString('ar-DZ', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }
  if (typeof ts === 'string') return ts
  return '-'
}
