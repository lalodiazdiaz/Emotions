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
import PsychologistScreen
	from './components/AdminTherapist/PsychologistList/PsychologistScreen';
import AddPsychologist from './components/AdminTherapist/AddPsychologist/AddPsychologist';
import DetailsPatients from './components/DetailsPatients/DetailsPatients';
import AddPatients from './components/AddPatients/AddPatients';
import Records from './components/Tabs/Records/Records';
import Notes from './components/Tabs/Notes/Notes';
import Task from './components/Tabs/Task/Task';
import Evidences from './components/Tabs/Evidence/Evidence';
import Transcriptions from './components/Tabs/Transcriptions/Transcriptions';

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
					<Route
						element={(
							<ProtectedRoute>
								<AddPsychologist />
							</ProtectedRoute>
						)}
						path="/dashboard/addPsychologist/"
					/>
					<Route
						element={(
							<ProtectedRoute>
								<DetailsPatients />
							</ProtectedRoute>
						)}
						path="/dashboard/DetailsPatients/"
					>
						<Route
							element={(
								<ProtectedRoute>
									<Records />
								</ProtectedRoute>
							)}
							path="/dashboard/DetailsPatients/"
						/>
						<Route
							element={(
								<ProtectedRoute>
									<Notes />
								</ProtectedRoute>
							)}
							path="/dashboard/DetailsPatients/Notes"
						/>
						<Route
							element={(
								<ProtectedRoute>
									<Evidences />
								</ProtectedRoute>
							)}
							path="/dashboard/DetailsPatients/Evidences"
						/>
						<Route
							element={(
								<ProtectedRoute>
									<Task />
								</ProtectedRoute>
							)}
							path="/dashboard/DetailsPatients/Task"
						/>
						<Route
							element={(
								<ProtectedRoute>
									<Transcriptions />
								</ProtectedRoute>
							)}
							path="/dashboard/DetailsPatients/Trasncription"
						/>
					</Route>
					<Route
						element={(
							<ProtectedRoute>
								<AddPatients />
							</ProtectedRoute>
						)}
						path="/dashboard/AddPatients/"
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
