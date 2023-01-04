import React from 'react';
import styles from './NextAppointment.module.css';

function NextAppointment({ date, name, time, title }) {
	return (
		<div className={styles.contNextAppointment}>
			<div className={styles.contInfomation}>
				<div className={styles.name}>
					<p> {title}: {name}</p>
				</div>
				<div className={styles.contDate}>
					<div className={styles.date}>
						<p>Fecha:</p>
						<p>{date}</p>
					</div>
					<div className={styles.date}>
						<p>Hora:</p>
						<p>{time}</p>
					</div>
				</div>

			</div>
			<div className={styles.contButtons}>
				<button className={styles.btnVideocall} type="button">Videollamada</button>
				<button className={styles.btnCancel} type="button">Cancelar</button>
			</div>
		</div>
	);
}

export default NextAppointment;
