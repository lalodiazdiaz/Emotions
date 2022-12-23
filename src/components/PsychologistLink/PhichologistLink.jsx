import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PhichologistLink.module.css';

function PhichologistLink() {
	return (
		<div className={styles.optionsAside}>
			<NavLink className={styles.linkNav} to="/dashboardT/">
				Citas
			</NavLink>
			<NavLink className={styles.linkNav}>
				Pacientes
			</NavLink>
			<NavLink className={styles.linkNav}>
				Analisis de video
			</NavLink>
		</div>
	);
}

export default PhichologistLink;
