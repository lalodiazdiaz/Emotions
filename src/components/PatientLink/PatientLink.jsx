import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import EmergencyModal from '../EmergencyModal/EmergencyModal';
import styles from './PatientLink.module.css';

function PatientLink({ onAction }) {
	return (
		<>
			<div className={styles.optionsAside}>
				<Link className={styles.linkNav}>
					Citas y Tareas
				</Link>
				<Link className={styles.linkNav}>
					Notas
				</Link>
				<Link className={styles.linkNav}>
					Evidencias
				</Link>
				<Link className={styles.linkNav}>
					Perfil
				</Link>
			</div>
			<button
				className={styles.btnEmergency}
				 onClick={onAction}
				type="button"
			>911
			</button>
		</>
	);
}

export default PatientLink;
