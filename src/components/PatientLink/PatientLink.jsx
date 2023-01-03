import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PatientLink.module.css';

function PatientLink({ onAction, onClick }) {
	return (
		<div className={styles.contOptions}>
			<div className={styles.optionsAside}>
				<NavLink
					className={styles.linkNav}
					onClick={onClick}
					style={({ isActive }) => ({
						textDecoration: isActive ? 'underline' : 'none',
					})}
					to="/dashboard"
				>
					Citas y Tareas
				</NavLink>
				<NavLink
					className={styles.linkNav}
					onClick={onClick}
				>
					Notas
				</NavLink>
				<NavLink
					className={styles.linkNav}
					onClick={onClick}
				>
					Evidencias
				</NavLink>
				<NavLink
					className={styles.linkNav}
					onClick={onClick}
				>
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
		</div>
	);
}

export default PatientLink;
