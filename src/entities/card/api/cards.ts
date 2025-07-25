import { collection, getDocs } from 'firebase/firestore';

import { dbFirebase } from '@/shared/config/firebase';
import type { ICard } from '@/shared/types/card';

export const getUserCards = async (userId: string): Promise<ICard[]> => {
	const cardsCol = collection(dbFirebase, 'users', userId, 'cards');
	const snapshot = await getDocs(cardsCol);

	return snapshot.docs.map(doc => ({
		id: Number(doc.id),
		...(doc.data() as Omit<ICard, 'id'>),
	}));
};
