import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from './useAuth';

export const useCheckAuth = () => {
	const nav = useNavigate();
	const { user } = useAuth();

	useEffect(() => {
		console.log('user', user);
		if (!user) {
			nav('/auth');
		}
	}, []);
};
