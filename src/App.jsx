import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

function App() {
	const router = createBrowserRouter([
		{
			element: <Login />,
			path: '/',
		},
		{
			element: <Dashboard />,
			path: '/dashboard',
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
