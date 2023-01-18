import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Calendar from 'react-calendar';
import styles from './Dates.module.css';
import 'react-calendar/dist/Calendar.css';
import appointmentsService from '../../../services/Appointments/appointmentsService';
import NextAppontment from '../../NextAppointment/NextAppointent';
import Loader from '../../Loader/Loader';
import { getappointment } from '../../../slices/Appointmrent';

function Dates() {
	const [dataD, setDataD] = useState([]);
	const [tgl, setTgl] = useState(new Date());

	useEffect(() => {
		const getAppointments = () => {
			appointmentsService.getappointments()
				.then((response) => {
					const aux = response.data.data.map((x) => x.date);
					setDataD(aux);
				});
		};
		getAppointments();
	}, []);
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
							<div className={styles.notAppointment}>
								<p>No tienes citas pendientes</p>
							</div>
						)}

				</div>
				<div className={styles.calendar}>
					<Calendar
						onChange={setTgl}
						tileClassName={({ date }) => {
							let day = date.getDate();
							let month = date.getMonth() + 1;
							if (date.getMonth() < 10) {
								month = `0${month}`;
							}
							if (date.getDate() < 10) {
								day = `0${day}`;
							}
							const realDate = `${date.getFullYear()}/${month}/${day}`;
							if (dataD.find((val) => val === realDate)) {
								return styles.highlight;
							}
							return 0;
						}}
						value={tgl}
					/>
					<div className={styles.indicators}>
						<div className={styles.ContainerBox}>
							<div className={styles.FirstBox} />
							<p>• Días inhábiles.</p>
						</div>
						<div className={styles.ContainerBox}>
							<div className={styles.SecondBox} />
							<p>• Días con citas registradas.</p>
						</div>
						<div className={styles.ContainerBox}>
							<div className={styles.ThirdBox} />
							<p>• Días disponibles.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dates;
