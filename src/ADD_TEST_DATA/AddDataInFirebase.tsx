import { useMutation } from '@tanstack/react-query';
import { collection, doc, getDocs, writeBatch } from 'firebase/firestore';
import { type FC, memo } from 'react';

import { dbFirebase } from '@/shared/config/firebase';
import type { ICard } from '@/shared/types/card';

type Variables = {
	userId: string;
	cards: ICard[];
};

const addCardsToUser = async (
	userId: string,
	cards: ICard[],
): Promise<void> => {
	const batch = writeBatch(dbFirebase);

	const cardsCol = collection(dbFirebase, 'users', userId, 'cards');
	cards.forEach(card => {
		// если вы хотите использовать собственный card.id как ID документа:
		const ref = doc(cardsCol, String(card.id));
		// либо: doc(cardsCol) для авто‑ID
		batch.set(ref, card);
	});

	await batch.commit();
};

const data_to_bd = [
	{
		id: 1,
		name: 'Test 1',
		attack: 6,
		health: 0,
		price: 1,
		size: 1,
		move: 1,
	},
	{
		id: 2,
		name: 'Test 2',
		attack: 3,
		health: 0,
		price: 1,
		size: 1,
		move: 1,
	},
	{ id: 3, name: 'Test 3', attack: 0, health: 0, price: 1, size: 1, move: 1 },
];

const AddDataInFirebase: FC<any> = ({ userId }) => {
	const { mutate } = useMutation<void, Error, Variables>({
		mutationFn: ({ userId, cards }) => addCardsToUser(userId, cards),
		mutationKey: ['add_data_firebase'],
		onSuccess: () => {
			console.log('Cards added successfully');
			// при необходимости — инвалидируйте кэш, refetch и т.п.
		},
		onError: err => {
			console.error('Failed to add cards:', err);
		},
	});

	const fetchUserCards = async (userId: string): Promise<ICard[]> => {
		const cardsCol = collection(dbFirebase, 'users', userId, 'cards');
		const snapshot = await getDocs(cardsCol);
		const result = snapshot.docs.map(doc => ({
			id: Number(doc.id),
			...(doc.data() as Omit<ICard, 'id'>),
		}));

		console.log('data', result);
		return result;
	};

	return (
		<>
			<button onClick={() => mutate({ userId, cards: data_to_bd })}>
				AddDataInFirebase
			</button>
			<button onClick={() => fetchUserCards(userId)}>get data</button>
		</>
	);
};

export default memo(AddDataInFirebase);
