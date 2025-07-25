import { type DragEvent, type FC } from 'react';

import type { ICardsInHand } from './types';
import Card from '@/entities/card/components/Card';
import CardReverseSide from '@/entities/card/components/CardReverseSide';
import type { ICard } from '@/shared/types/card';

const CardsInHand: FC<ICardsInHand> = ({ cards, isUser }) => {
	const handleDragStart = (e: DragEvent<HTMLDivElement>, card: ICard) => {
		console.log('ok', e, card);
		// сериализуем минимальный набор полей
		e.dataTransfer.setData('application/json', JSON.stringify(card));
		// опционально: менять курсор
		e.dataTransfer.effectAllowed = 'move';
	};

	return (
		<div className='flex gap-2.5 h-1/4'>
			{isUser
				? cards.map((card, ind) => (
						<Card
							key={ind}
							card={card}
							onDragStart={e => handleDragStart(e, card)}
						/>
					))
				: cards.map((card, ind) => <CardReverseSide key={ind} />)}
		</div>
	);
};

export default CardsInHand;
