/**
 * Firebase Configuration Template
 * Location: lib/firebase.ts
 * 
 * This file needs to be created and configured when Firebase is set up
 * Follow the steps below to integrate Firebase
 */

// STEP 1: Install Firebase SDK
// pnpm add firebase

// STEP 2: Create this file at lib/firebase.ts
// STEP 3: Add environment variables to .env.local

// Template configuration:
/*
import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getStorage, connectStorageEmulator } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication
export const auth = getAuth(app)

// Initialize Firestore
export const db = getFirestore(app)

// Initialize Cloud Storage
export const storage = getStorage(app)

// Development: Connect to emulators
if (process.env.NODE_ENV === 'development') {
  try {
    connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true })
    connectFirestoreEmulator(db, 'localhost', 8080)
    connectStorageEmulator(storage, 'localhost', 9199)
  } catch (error) {
    // Emulator already connected or error
    console.log('Emulator connection:', error)
  }
}

// Export individual services
export { initializeApp, getAuth, getFirestore, getStorage }
*/

// ENVIRONMENT VARIABLES NEEDED (.env.local):
/*
NEXT_PUBLIC_FIREBASE_API_KEY=xxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxx.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxx.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxx
NEXT_PUBLIC_FIREBASE_APP_ID=1:xxx:web:xxx
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-xxx
*/

// FIRESTORE COLLECTIONS STRUCTURE
/*
منصة_قطاع_الثقافة/
├── users/                    # User profiles
│   ├── {userId}
│   │   ├── name: string
│   │   ├── email: string
│   │   ├── phone: string
│   │   ├── role: 'user' | 'admin'
│   │   ├── createdAt: timestamp
│   │   └── updatedAt: timestamp
│
├── applications/             # Service applications
│   ├── {applicationId}
│   │   ├── userId: string
│   │   ├── serviceType: string
│   │   ├── status: 'pending' | 'approved' | 'rejected'
│   │   ├── documents: []
│   │   ├── createdAt: timestamp
│   │   └── updatedAt: timestamp
│
├── events/                   # Cultural events
│   ├── {eventId}
│   │   ├── title: string
│   │   ├── description: string
│   │   ├── date: timestamp
│   │   ├── location: string
│   │   ├── capacity: number
│   │   ├── attendees: number
│   │   ├── image: string (URL)
│   │   ├── createdAt: timestamp
│   │   └── updatedAt: timestamp
│
├── services/                 # Available services
│   ├── {serviceId}
│   │   ├── name: string
│   │   ├── description: string
│   │   ├── icon: string
│   │   ├── url: string
│   │   └── active: boolean
│
└── inquiries/                # User inquiries/support
    ├── {inquiryId}
    │   ├── userId: string
    │   ├── email: string
    │   ├── message: string
    │   ├── status: 'new' | 'responded'
    │   ├── createdAt: timestamp
    │   └── respondedAt: timestamp
*/

// AUTHENTICATION CONTEXT EXAMPLE
/*
'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { auth } from '@/lib/firebase'
import { User, onAuthStateChanged } from 'firebase/auth'

interface AuthContextType {
  user: User | null
  loading: boolean
  error: Error | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setUser(user)
        setLoading(false)
      },
      (error) => {
        setError(error)
        setLoading(false)
      }
    )

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, error }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
*/

// RULES FOR FIRESTORE SECURITY
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public read for services and events
    match /services/{document=**} {
      allow read: if true;
    }
    
    match /events/{document=**} {
      allow read: if true;
      allow write: if request.auth != null && 
                      request.auth.token.admin == true;
    }
    
    // User profiles - readable by self and admin
    match /users/{userId} {
      allow read: if request.auth.uid == userId || 
                     request.auth.token.admin == true;
      allow write: if request.auth.uid == userId;
    }
    
    // Applications - readable by owner and admin
    match /applications/{appId} {
      allow read: if request.auth.uid == resource.data.userId || 
                     request.auth.token.admin == true;
      allow create: if request.auth != null;
      allow write: if request.auth.token.admin == true;
    }
    
    // Inquiries - writable by all users
    match /inquiries/{inquiryId} {
      allow read: if request.auth.token.admin == true;
      allow create: if request.auth != null;
    }
  }
}
*/

// SETUP INSTRUCTIONS
/*
1. Create Firebase Project:
   - Go to https://firebase.google.com
   - Create new project
   - Add web app

2. Get Configuration:
   - Copy credentials from Firebase console
   - Add to .env.local

3. Set up Authentication:
   - Enable Email/Password in Auth section
   - Optional: Enable Google Sign-In

4. Create Firestore Database:
   - Start in test mode (for development)
   - Switch to production rules when ready

5. Set up Storage:
   - For document uploads
   - Configure security rules

6. Install SDK:
   pnpm add firebase

7. Create lib/firebase.ts with config above

8. Wrap app with AuthProvider in layout.tsx

9. Start using Firebase in components:
   const { user, loading } = useAuth()
*/

export default {}
