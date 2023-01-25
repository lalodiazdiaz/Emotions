import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Alertify from 'alertifyjs';
import styles from './NextAppointment.module.css';
import { RANGE } from '../../constants';
import { deleteAppoitnment } from '../../slices/Appointmrent';
import 'alertifyjs/build/css/alertify.css';

function NextAppointment({ onAction, date, name, time, title, id }) {
	const [isVisible, setIsVisible] = useState(false);
	 const dispatch = useDispatch();
	const local = JSON.parse(localStorage.getItem('user'));
	const { token, range } = local.data;

	const handleDeleteAppointment = async () => {
		setIsVisible(true);
		await dispatch(deleteAppoitnment({ id }))
			.then((res) => {
				if (res.payload.isValid) {
					Alertify.success(`<b style='color:white;'>Cita cancelada
					</b>`);
				}
			});
		onAction();
		setIsVisible(false);
	};

	return (
		<div className={range === RANGE.patient
			? styles.contNextAppointment
			: styles.contNextAppointments}
		>
			<div className={styles.contInfomation}>
				<div className={range === RANGE.patient
					? styles.patient
					: styles.therapist}
				>
					<p> {title}: {name}</p>
				</div>
				<div className={styles.contDate}>
					<div className={range === RANGE.patient
						? styles.date
						: styles.dates}
					>
						<p>Fecha:</p>
						<p>{date}</p>
					</div>
					<div className={range === RANGE.patient
						? styles.date
						: styles.dates}
					>
						<p>Hora:</p>
						<p>{time}</p>
					</div>
				</div>

			</div>
			<div className={styles.contButtons}>
				<button
					className={range === RANGE.patient
						? styles.btnVideocall
						: styles.btnVideocalls}
					type="button"
				>
					Videollamada
				</button>
				<button
					className={range === RANGE.patient
						? styles.btnCancel
						: styles.btnsCancel}
					disabled={isVisible}
					onClick={handleDeleteAppointment}
					type="button"
				>
					Cancelar
				</button>
			</div>
		</div>
	);
}

export default NextAppointment;
