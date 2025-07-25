import { useMutation } from '@tanstack/react-query';

import { createBattle } from '../api/battleApi';

export const useCreateBattle = () => {
	return useMutation({
		mutationKey: ['createBattle'],
		mutationFn: ({
			uidA,
			uidB,
			deckA,
			deckB,
			initialHandCount,
		}: {
			uidA: string;
			uidB: string;
			deckA: string[];
			deckB: string[];
			initialHandCount?: number;
		}) => createBattle(uidA, uidB, deckA, deckB, initialHandCount),
	});
};
