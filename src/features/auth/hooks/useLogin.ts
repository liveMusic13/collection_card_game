import { useMutation } from '@tanstack/react-query';
import type { User } from 'firebase/auth';

import { loginApi } from '../api/api';

export const useLogin = () => {
	return useMutation<User, Error, { email: string; password: string }>({
		mutationKey: ['auth', 'user'],
		mutationFn: ({ email, password }) => loginApi(email, password),
		onSuccess: data => data,
		onError: err => {
			console.error('Login failed:', err);
		},
	});
};
