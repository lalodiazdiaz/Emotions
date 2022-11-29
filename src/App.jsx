import React from 'react';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import './App.css';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';

function App() {
	const router = createBrowserRouter([
		{
			element: <Home />,
			path: '/',
		},
		{
			element: <Login />,
			path: 'login',
		},
		{
			element: <Dashboard />,
			path: '/dashboard',
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
