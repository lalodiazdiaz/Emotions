import React from 'react';
import styles from './Dates.module.css';
import NextAppontment from '../../NextAppointment/NextAppointent';

function Dates() {
	return (
		<div className={styles.contAppointments}>
			<div className={styles.Appointments}>
				<div className={styles.contNextAppointment}>
					<h1>Proximas Citas</h1>
					<div className={styles.nextAppointments}>
						<NextAppontment
							action="Iniciar"
							date="21/3/2023"
							name="Eduardo Diaz Diaz de  leon"
							time="14:00:00"
							title="Paciente"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dates;
