import { type FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/features/auth/hooks/useAuth';
import { useLogin } from '@/features/auth/hooks/useLogin';

const Auth: FC = () => {
	const nav = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { mutate, isSuccess, isPending } = useLogin();
	const { user } = useAuth();

	useEffect(() => {
		if (isSuccess || user) {
			nav('/');
		}
	}, [isSuccess]);

	return (
		<div>
			<h1>Auth</h1>
			{isPending && <div>Loading...</div>}
			<input
				className='border-2 '
				type='text'
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<input
				className='border-2'
				type='password'
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<button type='button' onClick={() => mutate({ email, password })}>
				login
			</button>
		</div>
	);
};

export default Auth;
