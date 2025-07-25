import {
	getDatabase,
	push,
	ref,
	serverTimestamp,
	set,
} from 'firebase/database';

export interface BattlePlayer {
	uid: string;
	deck: string[]; // массив ID карт в колоде
	hand: string[]; // массив ID карт в руке
	deckSize: number;
	mana: number;
}

export interface BattleMeta {
	turn: number;
	activePlayer: 'A' | 'B';
	state: 'waiting' | 'playing' | 'finished';
	createdAt: any;
}

export interface Battle {
	meta: BattleMeta;
	players: {
		A: BattlePlayer;
		B: BattlePlayer;
	};
}

/**
 * Create a new battle in Realtime Database.
 * @param uidA - UID первого игрока
 * @param uidB - UID второго игрока
 * @param deckA - массив ID карт для первого игрока
 * @param deckB - массив ID карт для второго игрока
 * @param initialHandCount - сколько карт в руку на старте
 * @returns key нового боя (battleId)
 */
export const createBattle = async (
	uidA: string,
	uidB: string,
	deckA: string[],
	deckB: string[],
	initialHandCount = 3,
): Promise<string> => {
	const db = getDatabase();
	const battlesRef = ref(db, 'battles');
	const newBattleRef = push(battlesRef);

	// Раздача начальной руки
	const handA = deckA.slice(0, initialHandCount);
	const handB = deckB.slice(0, initialHandCount);

	const remainingDeckA = deckA.slice(initialHandCount);
	const remainingDeckB = deckB.slice(initialHandCount);

	const battle: Battle = {
		meta: {
			turn: 1,
			activePlayer: 'A',
			state: 'playing',
			createdAt: serverTimestamp(),
		},
		players: {
			A: {
				uid: uidA,
				deck: remainingDeckA,
				hand: handA,
				deckSize: remainingDeckA.length,
				mana: 1,
			},
			B: {
				uid: uidB,
				deck: remainingDeckB,
				hand: handB,
				deckSize: remainingDeckB.length,
				mana: 0,
			},
		},
	};

	await set(newBattleRef, battle);
	return newBattleRef.key as string;
};
