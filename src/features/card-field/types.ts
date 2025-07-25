import type { TSide } from '@/app/store/useBattlegroundStore';

export interface ICellProps {
	index: number;
	side: TSide;
}

export interface ICardFieldProps {
	side: TSide;
}
