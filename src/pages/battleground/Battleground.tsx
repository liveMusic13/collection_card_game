import { type FC } from 'react';

import GoldOnTheBattleground from '@/widgets/gold-on-the-battleground/GoldOnTheBattleground';
import SideOfTheBattleground from '@/widgets/side-of-the-battleground/SideOfTheBattleground';

const Battleground: FC = () => {
	return (
		<div className='flex h-full'>
			<div className='flex flex-col flex-1 bg-amber-300 '>
				<SideOfTheBattleground isUser={false} />
				<SideOfTheBattleground isUser={true} />
			</div>
			<GoldOnTheBattleground />
		</div>
	);
};

export default Battleground;
