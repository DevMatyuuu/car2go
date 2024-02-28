import { app } from './firebase'
import { collection, getFirestore } from 'firebase/firestore'

const db = getFirestore(app)

export const categoryCollection = collection(db, 'category');

export const vehicleCollection = collection(db, "vehicles");







