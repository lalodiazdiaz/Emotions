import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styles from './DetailsPatients.module.css';

function DetailsPatients() {
	return (
		<div className={styles.contMain}>
			<div className={styles.tabsScreen}>
				<div className={styles.options}>
					<NavLink
						className={({ isActive }) => (isActive ? styles.tabActive
							: styles.tabOption)}
						to="/dashboard/DetailsPatients/"
					>
						Expediente
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? styles.tabActive
							: styles.tabOption)}
						to="/dashboard/DetailsPatients/Notes"
					>
						Notas
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? styles.tabActive
							: styles.tabOption)}
						to="/dashboard/DetailsPatients/Evidences"
					>
						Evidencias
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? styles.tabActive
							: styles.tabOption)}
						to="/dashboard/DetailsPatients/Task"
					>
						Tareas
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? styles.tabActive
							: styles.tabOption)}
						to="/dashboard/DetailsPatients/Trasncription"
					>
						Transcripciones
					</NavLink>
				</div>
				<div className={styles.contScreens}>
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default DetailsPatients;
