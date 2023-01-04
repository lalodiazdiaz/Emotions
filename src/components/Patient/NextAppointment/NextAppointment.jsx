import React from 'react';
import styles from './NextAppointment.module.css';

function NextAppointment({ title }) {
	return (
		<div className={styles.contNextAppointment}>
			<div className={styles.contInfomation}>
				<div className={styles.name}>
					<p> {title}: Claudia Patricia Gonzalez Moreno</p>
				</div>
				<div className={styles.contDate}>
					<div className={styles.date}>
						<p>Fecha:</p>
						<p>12/02/2023</p>
					</div>
					<div className={styles.date}>
						<p>Hora:</p>
						<p>12:00 pm</p>
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
