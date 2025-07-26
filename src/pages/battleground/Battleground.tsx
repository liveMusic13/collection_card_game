import { type FC } from 'react';
import { Link } from 'react-router-dom';

import GoldOnTheBattleground from '@/widgets/gold-on-the-battleground/GoldOnTheBattleground';
import SideOfTheBattleground from '@/widgets/side-of-the-battleground/SideOfTheBattleground';

const Battleground: FC = () => {
	// 1
	return (
		<div className='flex h-full'>
			<div className='flex flex-col flex-1 bg-amber-300 '>
				<SideOfTheBattleground isUser={false} />
				<SideOfTheBattleground isUser={true} />
				<Link to={'/'}>домашняя</Link>
				<Link to={'/auth'}>авторизация</Link>
			</div>
			<GoldOnTheBattleground />
		</div>
	);
};

export default Battleground;
