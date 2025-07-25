import { create } from 'zustand';

import type { ICard } from '@/shared/types/card';

export type TSide = 'user' | 'enemy';

type TBattlegroundStore = {
	userCells: Array<ICard | null>;
	enemyCells: Array<ICard | null>;
	dropCard: (side: TSide, index: number, card: ICard) => void;
};

export const useBattlegroundStore = create<TBattlegroundStore>(set => ({
	userCells: Array(28).fill(null),
	enemyCells: Array(28).fill(null),
	dropCard: (side, index, card) =>
		set(state => {
			// выбираем нужный массив по side
			const key = side === 'user' ? 'userCells' : 'enemyCells';
			const arr = state[key] as Array<ICard | null>;
			if (arr[index]) return state; // если занято — выходим
			const nextArr = [...arr];
			nextArr[index] = card;
			return { [key]: nextArr } as Pick<TBattlegroundStore, typeof key>;
		}),
}));
