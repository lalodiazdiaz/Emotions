import React from 'react';
import Modal from '../Modal/Modal';
import styles from './EmergencyModal.module.css';
import { LINEA_VIDA, VIVETEL } from '../../constants';

function EmergencyModal() {
	return (
		<Modal
			isVisible
			title="Numeros de Emergencia"
		>
			<div className={styles.contact}>
				<h2>Línea de la vida</h2>
				<a
					className={styles.callEmergency}
					href={LINEA_VIDA}
					rel="noreferrer"
				>
					Llamar
				</a>
			</div>
			<div className={styles.contact}>
				<h2>Vivetel Salud Mental </h2>
				<a
					className={styles.callEmergency}
					href={VIVETEL}
					rel="noreferrer"
				>
					Llamar
				</a>
			</div>
		</Modal>
	);
}

export default EmergencyModal;
