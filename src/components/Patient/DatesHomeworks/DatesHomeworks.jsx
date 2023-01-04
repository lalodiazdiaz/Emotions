import React, { useEffect, useState } from 'react';
import NextAppointment from '../../NextAppointment/NextAppointent';
import styles from './DatesHomeworks.module.css';
import getNextAppointment from '../../../services/Appointments/appointmentsService';

function DatesAndHomeworks() {
	const [next, setNext] = useState('');
	const [loading, setloading] = useState(false);

	const local = JSON.parse(localStorage.getItem('user'));
	const { data } = local;
	const AuthStr = `Bearer ${data.token}`;
	useEffect(() => {
		getNextAppointment(AuthStr)
			.then((result) => {
				setNext(result[0]);
			})
			.finally(() => setloading(true));
	}, []);

	const { therapistName } = next;
	const { date } = next;
	const dateObject = new Date(date);
	const dateAppointment = dateObject.toLocaleDateString();
	const timeAppointment = dateObject.toLocaleTimeString();
	return (
		<div className={styles.contAppointments}>
			<div className={styles.Appointments}>
				<h2>Proxima cita</h2>
				{loading
					? (
						<NextAppointment
							date={dateAppointment}
							name={therapistName}
							time={timeAppointment}
							title="Psicologo"
						/>
					)
					: <span>Loading...</span>}
			</div>
		</div>
	);
}

export default DatesAndHomeworks;
