import { type DragEvent, type FC, useState } from 'react';

import type { ICellProps } from './types';
import { useBattlegroundStore } from '@/app/store/useBattlegroundStore';
import type { ICard } from '@/shared/types/card';

const Cell: FC<ICellProps> = ({ side, index }) => {
	const occupied = useBattlegroundStore(s =>
		side === 'user' ? s.userCells[index] : s.enemyCells[index],
	);
	const dropCard = useBattlegroundStore(s => s.dropCard);

	const [isOver, setIsOver] = useState(false);

	const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
		if (side !== 'user') return;
		e.preventDefault(); // чтобы разрешить drop
		setIsOver(true);
	};

	const handleDragLeave = () => {
		setIsOver(false);
	};

	const handleDrop = (e: DragEvent<HTMLDivElement>) => {
		if (side !== 'user') return;
		e.preventDefault();
		setIsOver(false);
		const json = e.dataTransfer.getData('application/json');
		if (!json) return;
		const card: ICard = JSON.parse(json);
		dropCard(side, index, card);
	};

	const bgClass = occupied
		? 'bg-yellow-100'
		: isOver
			? 'bg-green-100'
			: 'bg-gray-50';

	return (
		<div
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
			onDrop={handleDrop}
			className={`w-full h-16 border flex items-center justify-center transition-colors hover:bg-gray-100 ${bgClass}`}
		>
			{occupied ? (
				// минимальная инфа в ячейке: name + attack/health
				<div className='text-sm text-center'>
					<div className='font-semibold'>{occupied.name}</div>
					<div>
						🗡 {occupied.attack}  🛡 {occupied.health}
					</div>
				</div>
			) : (
				<span className='text-gray-400'>пусто</span>
			)}
		</div>
	);
};

export default Cell;
