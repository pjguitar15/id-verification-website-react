import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDRd5q_eCE8zFBWY-Nlq3fcjyuu6N6RHn4',
  authDomain: 'ai-powered-7d5dd.firebaseapp.com',
  projectId: 'ai-powered-7d5dd',
  storageBucket: 'ai-powered-7d5dd.appspot.com',
  messagingSenderId: '772824337876',
  appId: '1:772824337876:web:451e49de68bfedd3b09a41',
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
