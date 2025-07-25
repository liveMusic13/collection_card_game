import { type User } from 'firebase/auth';
import { type DocumentData, Timestamp } from 'firebase/firestore';

export interface UserProfile extends DocumentData {
	uid: string;
	email: string;
	displayName?: string;
	photoURL?: string;
	createdAt: Timestamp;
	updatedAt: Timestamp;
}

export interface AuthContextType {
	user: User | null;
	error: any | null;
	isLoading: boolean;
	// signIn: (email: string, password: string) => Promise<void>;
	// signUp: (email: string, password: string) => Promise<void>;
	// signOut: () => Promise<void>;
}

// Добавьте свои типы данных здесь
export interface ExampleDocument extends DocumentData {
	id: string;
	title: string;
	content: string;
	createdAt: Timestamp;
}
