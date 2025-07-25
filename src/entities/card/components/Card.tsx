import { type FC } from 'react';

import type { ICardProps } from '../types';

const Card: FC<ICardProps> = ({ card, onDragStart }) => {
	return (
		<div className=' border-[1px] ' draggable onDragStart={onDragStart}>
			Card
			<h2>{card.name}</h2>
			<p>
				<span>price</span>
				<span>{card.price}</span>
			</p>
			<div>
				<p>
					<span>attack</span>
					<span>{card.attack}</span>
				</p>
				<p>
					<span>size</span>
					<span>{card.size}</span>
				</p>
				<p>
					<span>health</span>
					<span>{card.health}</span>
				</p>
			</div>
		</div>
	);
};

export default Card;
