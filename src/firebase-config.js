import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { setPersistence, browserSessionPersistence } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBolY_j7UpdbCDyUCMl4wNAUTOcBor2Q_s',
  authDomain: 'juego-harry-potter-52bdb.firebaseapp.com',
  projectId: 'juego-harry-potter-52bdb',
  storageBucket: 'juego-harry-potter-52bdb.appspot.com',
  messagingSenderId: '32578120456',
  appId: '1:32578120456:web:f6fc8b8ef6ebdf14619abd',
  measurementId: 'G-402MB3FY20',
}

export const fireBaseApp = initializeApp(firebaseConfig)
export const analytics = getAnalytics(fireBaseApp)
export const auth = getAuth(fireBaseApp)
export const db = getFirestore(fireBaseApp)

setPersistence(auth, browserSessionPersistence)