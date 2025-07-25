import {
	type User,
	createUserWithEmailAndPassword,
	signOut as firebaseSignOut,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import Cookies from 'js-cookie';

import { TOKEN } from '@/shared/config/constants';
import { authFirebase } from '@/shared/config/firebase';

export const registerApi = async (
	email: string,
	password: string,
): Promise<User> => {
	const { user } = await createUserWithEmailAndPassword(
		authFirebase,
		email,
		password,
	);
	return user;
};

export const loginApi = async (
	email: string,
	password: string,
): Promise<User> => {
	const { user } = await signInWithEmailAndPassword(
		authFirebase,
		email,
		password,
	);
	return user;
};

export const logoutApi = async (): Promise<void> => {
	await firebaseSignOut(authFirebase);
	Cookies.remove(TOKEN);
};

export const subscribeAuth = (callback: (user: User | null) => void) => {
	return onAuthStateChanged(authFirebase, callback);
};
