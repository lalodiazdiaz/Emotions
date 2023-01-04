import React from 'react';
import NextAppointment from '../NextAppointment/NextAppointment';
import styles from './DatesHomeworks.module.css';

function DatesAndHomeworks() {
	return (
		<div className={styles.contAppointments}>
			<div className={styles.Appointments}>
				<h2>Proxima cita</h2>
				<NextAppointment title="Psicologo" />
			</div>
		</div>
	);
}

export default DatesAndHomeworks;
