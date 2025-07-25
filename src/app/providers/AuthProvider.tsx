import { useQuery, useQueryClient } from '@tanstack/react-query';
import type { User } from 'firebase/auth';
import Cookies from 'js-cookie';
import {
	type FC,
	type PropsWithChildren,
	createContext,
	useEffect,
	useState,
} from 'react';

import { subscribeAuth } from '@/features/auth/api/api';
import { TOKEN } from '@/shared/config/constants';
import type { AuthContextType } from '@/shared/types/firebase';

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined,
);

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const qc = useQueryClient();
	const [firebaseUser, setFirebaseUser] = useState<User | null>(null);

	const {
		data: user,
		isLoading,
		error,
	} = useQuery<User | null, Error>({
		queryKey: ['auth', 'user'],
		queryFn: () => Promise.resolve(firebaseUser),
		enabled: false,
	});

	// useEffect(() => {
	// 	const unsubscribe = subscribeAuth(u => {
	// 		setFirebaseUser(u);
	// 		qc.setQueryData(['auth', 'user'], u);
	// 	});
	// 	return unsubscribe;
	// }, [qc]);
	useEffect(() => {
		const unsubscribe = subscribeAuth(async u => {
			if (u) {
				const token = await u.getIdToken();
				Cookies.set(TOKEN, token, { expires: 7 }); // хранить 7 дней
				setFirebaseUser(u);
				qc.setQueryData(['auth', 'user'], u);
			} else {
				Cookies.remove(TOKEN);
				setFirebaseUser(null);
				qc.setQueryData(['auth', 'user'], null);
			}
		});
		return unsubscribe;
	}, [qc]);

	return (
		<AuthContext.Provider
			value={{ user: user ?? null, isLoading: isLoading, error: error ?? null }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
