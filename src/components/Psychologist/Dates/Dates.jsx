import React, { useState, useCallback } from 'react';
import AppointmentModal from '../../AppointmentModal/AppointmentModal';
import styles from './Dates.module.css';

function Dates() {
	const [modal, setModal] = useState(false);

	const modalOpenAction = useCallback(() => {
		setModal(true);
	}, []);

	const modalCloseAction = useCallback(() => {
		setModal(false);
	}, []);
	return (
		<div className={styles.contAppointments}>
			<div className={styles.Appointments}>
				<h1>Hello Welcome Doctor to the Dates</h1>
				<button
					className={styles.schedule}
					onClick={modalOpenAction}
					type="button"
				>
					Agregar
				</button>
			</div>
			<AppointmentModal isVisible={modal} onAction={modalCloseAction} />
		</div>
	);
}

export default Dates;
