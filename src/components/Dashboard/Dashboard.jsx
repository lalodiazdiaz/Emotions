import * as React from 'react';
import PatientNavbar from './Navbars/PatientNavbar';
import PshycologistNavbar from './Navbars/PsychologistNavbar';

function Dashboard() {
	const loggedUser = window.localStorage.getItem('user');
	const userLogged = JSON.parse(loggedUser);

	return (
		<div>
			{userLogged.data.range === 1
				? (
					<PatientNavbar />
				)
				: (
					<PshycologistNavbar />
				)}
		</div>
	);
}

export default Dashboard;
