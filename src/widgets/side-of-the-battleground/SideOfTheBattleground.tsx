import { type FC } from 'react';

import type { ISideOfTheBattleground } from './types';
import CardField from '@/features/card-field/CardField';
import CardsInHand from '@/features/cards-in-hand/CardsInHand';
import type { ICard } from '@/shared/types/card';

const arrCards: ICard[] = [
	{
		id: 0,
		name: 'a',
		attack: 3,
		health: 10,
		price: 8,
		size: 2,
	},
	{
		id: 1,
		name: 'b',
		attack: 3,
		health: 10,
		price: 8,
		size: 2,
	},
	{
		id: 2,
		name: 'c',
		attack: 3,
		health: 10,
		price: 8,
		size: 2,
	},
];

const SideOfTheBattleground: FC<ISideOfTheBattleground> = ({ isUser }) => {
	const side = isUser ? 'user' : 'enemy';
	const style = isUser ? 'border-t-1 items-end ' : ' border-b-1 ';

	return (
		<div
			className={`flex flex-col flex-1 justify-center border-black ${style}`}
		>
			{isUser && <CardField side={side} />}
			<CardsInHand cards={arrCards} isUser={isUser} />
			{!isUser && <CardField side={side} />}
		</div>
	);
};

export default SideOfTheBattleground;
