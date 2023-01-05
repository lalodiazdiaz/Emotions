import React from 'react';
import Modal from '../Modal/Modal';
import styles from './AppointmentModal.module.css';

function AppointmentModal({ onAction, isVisible }) {
	return (
		<Modal
			isVisible={isVisible}
			onAction={onAction}
			title="Agendar Cita"
		>
			<div className={styles.data}>
				<h2>Nombre:</h2>
				<input
					className={styles.input}
					name="userName"
					placeholder="Nombre del Usuario"
					type="text"
				/>
				<h2>Fecha:</h2>
				<input
					className={styles.input}
					name="date"
					placeholder="Fecha de la cita"
					type="text"
				/>
				<h2>Hora:</h2>
				<input
					className={styles.input}
					name="hour"
					placeholder="Hora de la cita"
					type="text"
				/>
			</div>
		</Modal>
	);
}

export default AppointmentModal;
