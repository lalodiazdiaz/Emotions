import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Dates from './components/Psychologist/Dates/Dates';
import Analysis from './components/Psychologist/Analysis/Analysis';
import Patients from './components/Psychologist/Patients/Patients';
import Note from './components/Patient/Note/Note';
import Evidence from './components/Patient/Evidence/Evidence';
import Profile from './components/Patient/Profile/Profile';
import DatesAndHomeworks from './components/Patient/DatesHomeworks/DatesHomeworks';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { RANGE } from './constants';
import PsychologistScreen from './components/AdminTherapist/PsychologistScreen';

function App() {
	const userLog = JSON.parse(localStorage.getItem('user'));
	const { range } = userLog ? userLog.data : '';
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} path="/" />
				<Route element={<Login />} path="/login" />
				<Route
					element={(
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					)}
					path="/dashboard/"
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
					<Route
						element={(
							<ProtectedRoute>
								<Analysis />
							</ProtectedRoute>
						)}
						path="/dashboard/analysis/"
					/>
					<Route
						element={(
							<ProtectedRoute>
								<Patients />
							</ProtectedRoute>
						)}
						path="/dashboard/patients/"
					/>
					<Route
						element={(
							<ProtectedRoute>
								<PsychologistScreen />
							</ProtectedRoute>
						)}
						path="/dashboard/therapist/"
					/>
					<Route
						element={(
							<ProtectedRoute>
								<Note />
							</ProtectedRoute>
						)}
						path="/dashboard/note/"
					/>
					<Route
						element={(
							<ProtectedRoute>
								<Evidence />
							</ProtectedRoute>
						)}
						path="/dashboard/evidence/"
					/>
					<Route
						element={(
							<ProtectedRoute>
								<Profile />
							</ProtectedRoute>
						)}
						path="/dashboard/profile/"
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
