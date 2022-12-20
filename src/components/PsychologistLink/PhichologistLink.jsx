import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PhichologistLink.module.css';

function PhichologistLink() {
	return (
		<div className={styles.optionsAside}>
			<Link className={styles.linkNav}>
				Citas
			</Link>
			<Link className={styles.linkNav}>
				Pacientes
			</Link>
			<Link className={styles.linkNav}>
				Analisis de video
			</Link>
		</div>
	);
}

export default PhichologistLink;
