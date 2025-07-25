import { type FC } from 'react';

import Cell from './Cell';
import type { ICardFieldProps } from './types';

const CardField: FC<ICardFieldProps> = ({ side }) => {
	return (
		<div className='w-full h-3/4 grid grid-cols-7 grid-rows-4 gap-2 p-4'>
			{Array.from({ length: 28 }, (_, ind) => (
				// <div
				// 	key={ind}
				// 	className='border border-gray-300 rounded bg-gray-50 hover:bg-gray-100 transition-colors'
				// ></div>
				<Cell key={ind} index={ind} side={side} />
			))}
		</div>
	);
};

export default CardField;
