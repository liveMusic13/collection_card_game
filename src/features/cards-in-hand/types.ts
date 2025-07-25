import type { ICard } from '@/shared/types/card';

export interface ICardsInHand {
	cards: ICard[];
	isUser: boolean;
}
