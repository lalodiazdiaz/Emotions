import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} path="/" />
				<Route element={<Login />} path="login" />
				<Route element={<Dashboard />} path="dashboard" />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
