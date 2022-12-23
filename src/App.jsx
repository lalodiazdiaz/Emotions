import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Dates from './components/Psychologist/Dates/Dates';
import DatesAndHomeworks from './components/Patient/DatesHomeworks/DatesHomeworks';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} path="/" />
				<Route element={<Login />} path="login" />
				<Route
					element={(
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					)}
					path="dashboardP/"
				>
					<Route element={<DatesAndHomeworks />} path="/dashboardP/" />
				</Route>
				<Route
					element={(
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					)}
					path="dashboardT/"
				>
					<Route element={<Dates />} path="/dashboardT/" />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
