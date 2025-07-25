import { type FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { routes } from './router.data';
import { useAuth } from '@/features/auth/hooks/useAuth';

const Router: FC = () => {
	const { user } = useAuth();

	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					if (!user && route.isAuth) return null;

					return (
						<Route
							key={route.path}
							element={<route.component />}
							path={route.path}
						/>
					);
				})}
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
