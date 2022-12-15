import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
	const user = localStorage.getItem('user') || null;

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} path="/" />
				<Route element={<Login />} path="login" />
				<Route
					element={(
						<ProtectedRoute user={user}>
							<Dashboard />
						</ProtectedRoute>
					)}
					path="dashboard"
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
