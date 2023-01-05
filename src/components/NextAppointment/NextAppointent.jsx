import React from 'react';
import styles from './NextAppointment.module.css';
import { RANGE } from '../../constants';

function NextAppointment({ action, date, name, time, title }) {
	const local = JSON.parse(localStorage.getItem('user'));
	const { range } = local.data;
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
				>{action}
				</button>
				<button
					className={range === RANGE.patient
					 ? styles.btnCancel
					 : styles.btnsCancel}
					type="button"
				>Cancelar
				</button>
			</div>
		</div>
	);
}

export default NextAppointment;
