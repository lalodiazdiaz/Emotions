import React, { useEffect, useState } from 'react';
import NextAppointment from '../NextAppointment/NextAppointment';
import styles from './DatesHomeworks.module.css';
import getNextAppointment from '../../../services/Appointments/appointmentsService';

function DatesAndHomeworks() {
	const [next, setNext] = useState('');

	useEffect(() => {
		const res = getNextAppointment();
		setNext(res);
	}, []);
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
