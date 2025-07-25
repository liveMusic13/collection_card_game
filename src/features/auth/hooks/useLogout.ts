import { useMutation, useQueryClient } from '@tanstack/react-query';

import { logoutApi } from '../api/api';

export const useLogout = () => {
	const qc = useQueryClient();

	return useMutation<void, Error, void>({
		// Функция мутации
		mutationFn: () => logoutApi(),
		// По успешному логауту сбрасываем кэш авторизации
		onSuccess: () => {
			qc.removeQueries({ queryKey: ['auth', 'user'] });
		},
	});
};
