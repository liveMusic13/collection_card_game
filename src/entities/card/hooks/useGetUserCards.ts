import { useQuery } from '@tanstack/react-query';

import { getUserCards } from '../api/cards';

export const useGetUserCards = (userId: string) => {
	return useQuery({
		queryKey: [`user_cards_${userId}`],
		queryFn: () => getUserCards(userId),
		staleTime: 5 * 60 * 1000,
		retry: 1,
		refetchOnWindowFocus: false,
		refetchOnReconnect: true,
		select: data => data,
	});
};
