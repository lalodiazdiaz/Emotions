import React, { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useDispatch } from 'react-redux';
import styles from './Dates.module.css';
import NextAppontment from '../../NextAppointment/NextAppointent';
import { getNextAppointment } from '../../../services/Appointments/appointmentsService';
import Loader from '../../Loader/Loader';
import { getappointment } from '../../../slices/Appointmrent';

function Dates() {
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
	}, []);

	const updateList = () => {
		dispatch(getappointment({ AuthStr, params }))
			.unwrap()
			.then((res) => {
				setNext(res.data);
			}).finally(() => setloading(true));
	};

	if (!loading) {
		return (
			<div className={styles.contAppointments}>
				<div className={styles.Appointments}>
					<div className={styles.contNextAppointments}>
						<h1>Proximas Citas</h1>
						<Loader />
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.contAppointments}>
			<div className={styles.Appointments}>
				<div className={styles.contNextAppointments}>
					<h1>Proximas Citas</h1>
					{next.length >= 1
						? (
							<div className={styles.gridNextAppointments}>
								{next.map((item) => (
									<NextAppontment
										key={item.appointmentId}
										date={item.date}
										id={item.appointmentId}
										name={item.patientName}
										onAction={updateList}
										time={item.hour}
										title="Paciente"
									/>
								))}
							</div>
						)
						: (
							<div className={styles.loaderContainer}>
								<p>No tienes citas pendientes</p>
							</div>
						)}

				</div>
			</div>
		</div>
	);
}

export default Dates;
