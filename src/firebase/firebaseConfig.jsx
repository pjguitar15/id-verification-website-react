import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDomC2K0tLdKpN7gYoCkAdQ2V_uRCFzca4',
  authDomain: 'ai-powered-93626.firebaseapp.com',
  projectId: 'ai-powered-93626',
  storageBucket: 'ai-powered-93626.appspot.com',
  messagingSenderId: '38971356087',
  appId: '1:38971356087:web:9a3ea790e74713b9bbae32',
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
