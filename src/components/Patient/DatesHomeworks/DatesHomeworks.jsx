import React, { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useDispatch } from 'react-redux';
import NextAppointment from '../../NextAppointment/NextAppointent';
import styles from './DatesHomeworks.module.css';
import { getNextAppointment }
	from '../../../services/Appointments/appointmentsService';
import Loader from '../../Loader/Loader';
import { getappointment } from '../../../slices/Appointmrent';

function DatesAndHomeworks() {
	const [next, setNext] = useState('');
	const [loading, setloading] = useState(false);
	const [page, setPage] = useState(1);

	const dispatch = useDispatch();
	const local = JSON.parse(localStorage.getItem('user'));
	const { data } = local;
	const AuthStr = `Bearer ${data.token}`;
	const params = `/appointments?page=${page}&size=10&order=date&way=1`;
	useEffect(() => {
		dispatch(getappointment({ AuthStr, params }))
			.unwrap()
			.then((res) => {
				setNext(res.data);
			}).finally(() => setloading(true));
	}, [setNext]);

	const updateList = async () => {
	 await	dispatch(getappointment({ AuthStr, params }))
			.unwrap()
			.then((res) => {
				setNext(res.data);
			}).finally(() => setloading(true));
	};

	if (!loading) {
		return (
			<div className={styles.contAppointments}>
				<div className={styles.Appointments}>
					<h2>Proxima cita</h2>
					<Loader />
				</div>
			</div>
		);
	}
	return (
		<div className={styles.contAppointments}>
			<div className={styles.Appointments}>
				<h2>Proxima cita</h2>
				{next.length >= 1
					? (
						<NextAppointment
							date={next[0].date}
							id={next[0].appointmentId}
							name={next[0].therapistName}
							onAction={updateList}
							time={next[0].hour}
							title="Psicologo"
						/>
					)
					: (
						<div className={styles.notAppointments}>
							<p>No tienes citas pendientes</p>
						</div>
					)}
			</div>
		</div>
	);
}

export default DatesAndHomeworks;
