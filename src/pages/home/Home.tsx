import { type FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AddDataInFirebase from '@/ADD_TEST_DATA/AddDataInFirebase';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { useCheckAuth } from '@/features/auth/hooks/useCheckAuth';

const Home: FC = () => {
	useCheckAuth();
	const { user } = useAuth();

	const nav = useNavigate();

	return (
		<div>
			Home
			<AddDataInFirebase userId={user?.uid} />
			<Link to={'/battleground'}>поле боя</Link>
			<Link to={'/auth'}>авторизация</Link>
		</div>
	);
};

export default Home;
