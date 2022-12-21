import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PatientLink.module.css';

function PatientLink({ onAction }) {
	return (
		<>
			<div className={styles.optionsAside}>
				<NavLink className={styles.linkNav} to="/datesHomeworks">
					Citas y Tareas
				</NavLink>
				<NavLink className={styles.linkNav}>
					Notas
				</NavLink>
				<NavLink className={styles.linkNav}>
					Evidencias
				</NavLink>
				<NavLink className={styles.linkNav}>
					Perfil
				</NavLink>
			</div>
			<button
				className={styles.btnEmergency}
				onClick={onAction}
				type="button"
			>
				911
			</button>
		</>
	);
}

export default PatientLink;
