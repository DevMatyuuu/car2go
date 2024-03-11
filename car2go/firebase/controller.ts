import { app } from './firebase'
import { collection, getFirestore } from 'firebase/firestore'

export const db = getFirestore(app)

export const categoryCollection = collection(db, 'category');

export const vehicleCollection = collection(db, "vehicles");

export const carPreviewCollection = collection(db, "car-preview");

export const historyCollection = collection(db, "history");







