import type { DragEventHandler } from 'react';

import type { ICard } from '@/shared/types/card';

export interface ICardProps {
	card: ICard;
	// onDragStart: (e: DragEvent<HTMLDivElement>, card: ICard) => void;
	onDragStart: DragEventHandler<HTMLDivElement>;
}
