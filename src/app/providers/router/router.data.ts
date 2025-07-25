import Auth from '@/pages/auth/Auth';
import Battleground from '@/pages/battleground/Battleground';
import Home from '@/pages/home/Home';

export const routes = [
	{
		path: '/',
		component: Home,
		isAuth: true,
	},
	{
		path: '/auth',
		component: Auth,
		isAuth: false,
	},
	{
		path: '/battleground',
		component: Battleground,
		// isAuth: true,
		isAuth: true,
	},
];
