import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};

// Инициализация Firebase
const appFirebase = initializeApp(firebaseConfig);

// Инициализация сервисов
export const dbFirebase = getFirestore(appFirebase);
export const authFirebase = getAuth(appFirebase);
export const storageFirebase = getStorage(appFirebase);

export default appFirebase;
