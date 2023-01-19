import React from 'react';
import styles from './Patients.module.css';

function Patients() {
	return (
		<div className={styles.contAppointments}>
			<div className={styles.Appointments}>
				<div className={styles.contNextAppointments}>
					<h1>Pacientes</h1>
				</div>
			</div>
		</div>
	);
}

export default Patients;
