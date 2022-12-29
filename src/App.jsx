import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Dates from './components/Psychologist/Dates/Dates';
import DatesAndHomeworks from './components/Patient/DatesHomeworks/DatesHomeworks';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { RANGE } from './constants';

function App() {
	const userLog = JSON.parse(localStorage.getItem('user'));
	const { range } = userLog ? userLog.data : '';
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
					path="dashboard/"
				>
					{range === RANGE.patient
						? (
							<Route
								element={(
									<ProtectedRoute>
										<DatesAndHomeworks />
									</ProtectedRoute>
								)}
								path="/dashboard/"
							/>
						)
						: 			(
							<Route
								element={(
									<ProtectedRoute>
										<Dates />
									</ProtectedRoute>
								)}
								path="/dashboard/"
							/>
						)}

				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
