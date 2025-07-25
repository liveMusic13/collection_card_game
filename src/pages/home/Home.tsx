import { type FC } from 'react';

import AddDataInFirebase from '@/ADD_TEST_DATA/AddDataInFirebase';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { useCheckAuth } from '@/features/auth/hooks/useCheckAuth';

const Home: FC = () => {
	useCheckAuth();
	const { user } = useAuth();

	return (
		<div>
			Home
			<AddDataInFirebase userId={user?.uid} />
		</div>
	);
};

export default Home;
