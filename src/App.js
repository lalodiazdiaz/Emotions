import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from './components/Home';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/dashboard';

function App() {
	const router = createBrowserRouter([
		// {
		// 	path: '/',
		// 	element: <Home />,
		// },
		{
			path: '/',
			element: <Login />,
		},
		{
			path: '/dashboard',
			element: <Dashboard/>,
		}
	]);

	return <RouterProvider router={router} />;
}

export default App;
